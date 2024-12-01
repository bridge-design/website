import React, { forwardRef, ElementType, ReactNode } from 'react'
import classNames from 'classnames'

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
    const classes = classNames(
      'cursor-pointer inline-flex items-center group bg-no-repeat text-xl font-medium tracking-wide leading-snug',
      `text-[color:${colorVar}] hover:text-[color:${colorHoverVar}]`,
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
              ? `border-b-2 border-[var[--btg-color-accent-700]] pb-2 hover:border-[var(--btg-color-accent-700)] ${borderClassName}`
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
