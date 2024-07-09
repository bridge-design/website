import { Icon, Text } from '@bridge-the-gap/design-system'

import classnames from 'classnames'

export default function SectionTitle({ className, iconClassName, children }) {
  return (
    <div className={classnames('flex items-start', className)}>
      <Icon
        aria-hidden="true"
        name="Education32"
        className={classnames('mr-6 hidden md:block', iconClassName)}
      />
      <Text variant="3Xl" responsive={{ sm: '6Xl' }} as="h2">
        {children}
      </Text>
    </div>
  )
}
