import { CtaLink, Text } from '@bridge-the-gap/design-system'

import Link from '@/components/Link'

export default async function Page() {
  return (
    <div className="text-center">
      <Text as="h1" variant="7Xl" className="mx-auto mb-[14%] max-w-5xl">
        We team up with designers and developers to build and scale design systems.
      </Text>
      <CtaLink
        href="/contact"
        as={Link}
        // onClick={() => (window.location = "mailto:mail@bridge-the-gap.dev")}
        underline
        className="animate-fadeindelay"
      >
        Start a conversation
      </CtaLink>
    </div>
  )
}
