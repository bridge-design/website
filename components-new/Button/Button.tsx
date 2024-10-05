import { useMemo } from 'react'

export const buttonVariants = ['primary', 'secondary', 'ghost'] as const
export interface ButtonProps {
  children: React.ReactNode
  /** Button variant */
  variant?: (typeof buttonVariants)[number]
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'secondary', onClick }) => {
  const baseStyles = `px-4 py-2 rounded transition-colors duration-200 ease-in-out font-semibold`
  const focusStyles = 'focus:outline-none focus:ring focus:ring-violet-300'

  const variantStyles = useMemo(() => {
    switch (variant) {
      case 'primary':
        return `bg-[var(--btg-color-primary-500)] text-white hover:bg-[var(--btg-color-primary-400)]`
      case 'ghost':
        return `text-[var(--btg-color-primary-500)] hover:text-[var(--btg-color-primary-400)]`

      case 'secondary':
      default:
        return `bg-[var(--btg-color-neutral-600)] text-[var(--btg-color-neutral-200)] hover:bg-[var(--btg-color-neutral-500)]`
    }
  }, [variant])

  return (
    <button className={`${baseStyles} ${variantStyles} ${focusStyles}`} onClick={onClick}>
      {children}
    </button>
  )
}
