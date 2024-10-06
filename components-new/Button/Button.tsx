import { useMemo } from 'react'

export const buttonVariants = ['primary', 'secondary', 'ghost'] as const
export const buttonSizes = ['sm', 'md', 'lg']
export interface ButtonProps {
  children: React.ReactNode
  /** Button variant */
  variant?: (typeof buttonVariants)[number]
  /** Button sizes */
  size: (typeof buttonSizes)[number]
  /** if true, button will take full width of the parent container */
  fullWidth?: boolean
  /** if true, butoon will be rendered non-interactive and in disabled state  */
  disabled?: boolean
  onClick?: () => void
}

/**
 * Button description
 *
 * The classic button, in different colors, sizes, and states
 *
 * [Figma Design](https://www.figma.com)
 * [Github](https://github.com/bridge-design/website/blob/main/components/Button/Button.tsx)
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
}) => {
  const baseStyles = `rounded transition-colors duration-200 ease-in-out font-semibold`
  const focusStyles = 'focus:outline-none focus:ring focus:ring-violet-300'
  const disabledStyles = 'opacity-50 bg-opacity-50 pointer-events-none'
  const fullWidthStyles = 'w-full'
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

  const sizeStyles = useMemo(() => {
    switch (size) {
      case 'sm':
        return `px-2 py-1 text-sm`
      case 'lg':
        return `px-4 py-2 text-lg`

      case 'md':
      default:
        return `px-4 py-2 text-md`
    }
  }, [size])

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${focusStyles} ${sizeStyles} ${disabled ? disabledStyles : ''} ${fullWidth ? fullWidthStyles : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
