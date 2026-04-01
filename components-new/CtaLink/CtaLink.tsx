import React, { forwardRef, ElementType, ReactNode } from 'react'
import classNames from 'classnames'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

interface CtaLinkProps {
  to: string
  as?: ElementType
  children: ReactNode
  colorVar?: string
  colorHoverVar?: string
  className?: string
  borderClassName?: string
  arrow?: 'start' | 'end' | 'no'
  underline?: boolean
}

export const CtaLink = forwardRef<HTMLElement, CtaLinkProps>(
  (
    {
      to,
      as: Component = 'a',
      children,
      colorVar = '--btg-color-accent-500',
      colorHoverVar = '--btg-color-accent-700',
      className = '',
      borderClassName = '',
      arrow = 'no',
      underline = false,
      ...props
    },
    ref
  ) => {
    // Create a dynamic style object with CSS custom properties
    const linkStyle = {
      '--link-color': `var(${colorVar})`,
      '--link-hover-color': `var(${colorHoverVar})`,
    } as React.CSSProperties
    
    const classes = classNames(
      'cursor-pointer inline-flex items-center group bg-no-repeat font-medium tracking-wide leading-snug',
      className
    )
    
    // Handle base path for internal links when using default 'a' component
    const isInternalLink = to.startsWith('/') || to.startsWith('#')
    const href = Component === 'a' && isInternalLink && !to.startsWith('#') 
      ? `${basePath}${to}` 
      : to

    return (
      <Component 
        href={href}
        className={classes} 
        ref={ref} 
        style={linkStyle}
        {...props}
      >
        {arrow === 'start' && (
          <span className="transform no-underline transition duration-200 group-hover:-translate-x-1 motion-reduce:transform-none">
            ←{'\u2004'}
          </span>
        )}
        <span
          className={classNames(
            'text-[var(--link-color)] hover:text-[var(--link-hover-color)]',
            {
              'border-b-2 pb-2': underline,
              [`border-[var(--link-color)] hover:border-[var(--link-hover-color)] ${borderClassName}`]: underline,
            }
          )}
        >
          {children}
        </span>
        {arrow === 'end' && (
          <span className="transform no-underline transition duration-200 group-hover:translate-x-1 motion-reduce:transform-none">
            {'\u2004'}→
          </span>
        )}
      </Component>
    )
  }
)

CtaLink.displayName = 'CtaLink'
