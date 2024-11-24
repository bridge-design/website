import React, { ReactNode } from 'react'
import classnames from 'classnames'

interface ThreeColumnLayoutProps {
  children: ReactNode
  className?: string
  color?: 'primary' | 'accent' | 'highlight' | 'neutral'
}

interface ColumnProps {
  children: ReactNode
}

export const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> & {
  Column: React.FC<ColumnProps>
} = ({ children, className }) => {
  return (
    <div
      className={classnames(className, 'grid w-full max-w-none grid-cols-1 gap-6 md:grid-cols-3')}
    >
      {children}
    </div>
  )
}

// Sub-component for a Column
ThreeColumnLayout.Column = ({
  children,
  selectedColor,
}: ColumnProps & { selectedColor?: string }) => {
  return <div className="flex flex-col items-start">{children}</div>
}
