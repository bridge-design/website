import React from 'react'
import classnames from 'classnames'

interface SectionProps {
  children: React.ReactNode
  backgroundColor?: string
  color?: string
  className?: string
  narrow?: boolean
  expandRight?: boolean
}

export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor = '',
  color = '',
  className,
  narrow = false,
  expandRight = false,
}) => {
  return (
    <section
      className={classnames('w-full', className)}
      style={{ backgroundColor: `var(${backgroundColor})`, color: `var(${color})` }}
    >
      {expandRight ? (
        <div className="relative">
          {/* Container that aligns with other sections on the left */}
          <div className={classnames("ml-auto mr-auto pl-8", {
            "max-w-[768px]": narrow,
            "max-w-[1280px] lg:min-w-[1024px]": !narrow
          })}>
            {/* Content that can expand beyond the right edge */}
            <div className="overflow-x-auto" style={{ width: 'calc(100vw - 32px)', marginRight: 0 }}>
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={classnames('mx-auto w-full px-8', {
            'max-w-[768px]': narrow,
            'max-w-[1280px] sm:min-w-full lg:min-w-[1024px]': !narrow,
          })}
        >
          {children}
        </div>
      )}
    </section>
  )
}
