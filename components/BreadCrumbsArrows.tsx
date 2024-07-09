'use client'

import { Text } from '@bridge-the-gap/design-system'

import ArrowIcon from '../public/arrow.svg'
import ArrowLeftIcon from '../public/arrow-left.svg'

export default function BreadCrumbsArrows() {
  return (
    <div className="h-54 relative w-full">
      <div className="mt-20 flex items-baseline gap-[2%]">
        <Text as="p" responsive={{ sm: 'baseMedium', md: 'xlmedium', lg: '4xl' }} variant="4xl">
          Setup
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: 'baseMedium', md: 'xlmedium', lg: '4xl' }} variant="4xl">
          POC
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: 'baseMedium', md: 'xlmedium', lg: '4xl' }} variant="4xl">
          Outline
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: 'baseMedium', md: 'xlmedium', lg: '4xl' }} variant="4xl">
          Alignment
        </Text>
        <ArrowIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
      </div>
      <div className="ml-24 mt-20 flex items-baseline gap-[3%]">
        <Text as="p" responsive={{ sm: 'baseMedium', md: 'xlmedium', lg: '4xl' }} variant="4xl">
          Handover
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text as="p" responsive={{ sm: 'baseMedium', md: 'xlmedium', lg: '4xl' }} variant="4xl">
          Adoption
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
        <Text
          as="p"
          responsive={{ sm: 'baseMedium', md: 'xlmedium', lg: '4xl' }}
          variant="4xl"
          className="min-w-max"
        >
          Components library
        </Text>
        <ArrowLeftIcon
          width="116"
          height="16"
          fill="currentColor"
          className="text-light-on-background-900"
          title="arrow"
        />
      </div>
    </div>
  )
}
