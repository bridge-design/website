import React from 'react'
import * as CarbonIcons from '@carbon/icons-react'
import classNames from 'classnames'

interface IconProps {
  name: string
  className?: string
  size?: number
}

/**
 * Icon Component for rendering Carbon Design icons with styling.
 */
export const Icon: React.FC<IconProps> = ({ name, className, size = 16 }) => {
  const IconComponent = (CarbonIcons as any)[name]

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist in CarbonIcons.`)
    return null
  }

  return (
    <span
      className={classNames(
        'inline-flex max-w-min items-center justify-center rounded-[4px] p-4',
        className || 'bg-primary-50 text-primary-500'
      )}
    >
      <IconComponent size={size} />
    </span>
  )
}

Icon.displayName = 'Icon'

export default Icon
