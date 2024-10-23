import React, { ReactNode } from 'react'
import classnames from 'classnames'

interface Link {
  text: string
  href: string
}

interface CardProps {
  heading?: string
  link?: Link
  children?: ReactNode
  className?: string
  gradientColor?: string
  linkComponent?: React.ElementType
}

export const Card: React.FC<CardProps> = ({
  heading,
  link,
  children,
  className,
  gradientColor,
  linkComponent: LinkComponent = 'a',
}) => {
  return (
    <div
      className={classnames(
        'relative flex h-full w-full flex-col rounded-lg border border-[var(--btg-color-neutral-600)] p-6 text-left text-[var(--btg-color-neutral-100)] hover:cursor-pointer hover:bg-[var(--btg-color-primary-50)]',
        className
      )}
    >
      {gradientColor && (
        <div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(circle at bottom right, ${gradientColor}, transparent 45%)`,
            zIndex: -1,
          }}
        ></div>
      )}
      {heading && <h3 className="font-bold mb-6 text-2xl">{heading}</h3>}
      {children}
      {link && link.text && (
        <div className="mt-auto">
          <LinkComponent href={link.href} className="text-primary-500 hover:underline">
            {link.text}
          </LinkComponent>
        </div>
      )}
    </div>
  )
}
