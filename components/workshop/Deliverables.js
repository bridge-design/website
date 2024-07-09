'use client'

import { Text } from '@bridge-the-gap/design-system'

import SectionTitle from './SectionTitle'

export default function Deliverables() {
  return (
    <div className="mx-auto mt-28 max-w-4xl">
      <SectionTitle icon="Delivery32">Deliverables</SectionTitle>
      <Text variant="xlMedium" as="p" className="mt-10">
        By the end of the workshop, each team has a ready-to-use component library, an end product
        built out of that, and a tuned process to ensure smooth updates.
      </Text>
      <figure className="mt-10">
        <div className="aspect-w-5 aspect-h-3 w-full">
          <iframe
            title="Deliverables"
            width="888"
            // height="315"
            src="https://www.youtube.com/embed/RWECCt6rDPU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="item-center"
          ></iframe>
        </div>
        <Text
          as="figcaption"
          variant="sm"
          className="mt-2 text-center text-light-on-background-500"
        >
          Sneak peek: Changes in Figma design tokens are automatically reflected in the components
          and exported to code.
        </Text>
      </figure>
    </div>
  )
}
