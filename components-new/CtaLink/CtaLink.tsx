import React, { forwardRef, ElementType, ReactNode } from 'react'
import classNames from 'classnames'

interface CtaLinkProps {
  to: string
  as?: ElementType
  children: ReactNode
  color?: string
  colorHover?: string
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
      color = 'var(--btg-color-link)',
      colorHover = 'var(--btg-color-link--hover)',
      className = '',
      borderClassName = '',
      arrow = 'no',
      underline = false,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      'cursor-pointer inline-flex items-center group bg-no-repeat text-xl font-medium tracking-wide leading-snug',
      className
    )

    return (
      <Component href={to} className={classes} ref={ref} {...props}>
        {arrow === 'start' && (
          <span className="transform no-underline transition duration-200 group-hover:-translate-x-1 motion-reduce:transform-none">
            ←{'\u2004'}
          </span>
        )}
        <span
          className={
            underline
              ? `border-b-2 border-[${color || 'var(--btg-hero-text-color)'}] pb-2 hover:border-[${colorHover}] ${borderClassName}`
              : ''
          }
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
