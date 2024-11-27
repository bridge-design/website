'use client'

import { Badge, Card, Emoji, Text } from '@bridge-the-gap/design-system'
import { usePathname } from 'next/navigation'
import Link from '@/components-old/Link'

const blocks = [
  {
    title: 'Workshop flow',
    slug: 'workshop-flow',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    title: 'Introducion',
    slug: 'introducion',
    roles: ['designer', 'developer'],
    day: 1,
    url: 'https://miro.com/app/board/uXjVOf0JQik=/',
  },
  {
    title: 'Making a toast',
    slug: 'toast',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    title: 'Figma setup',
    slug: 'figma-setup',
    roles: ['designer'],
    day: 1,
  },
  {
    title: 'Repository setup',
    slug: 'repo-setup',
    roles: ['developer'],
    day: 1,
  },
  {
    title: 'UI inventory',
    slug: 'ui-inventory',
    roles: ['developer', 'designer'],
    day: 1,
  },
  {
    title: 'Design tokens',
    slug: 'design-tokens',
    roles: ['designer'],
    day: 1,
  },
  {
    title: 'Coding practice',
    slug: 'coding-practice',
    roles: ['developer'],
    day: 1,
  },
  {
    title: 'Preparing to release',
    slug: 'preparing-release',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'New challenge',
    slug: 're-design',
    roles: ['designer'],
    day: 2,
  },
  {
    title: 'Releasing the library',
    slug: 'releasing-library',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Product update',
    slug: 'product-update',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Cast in code',
    slug: 'cast-in-code',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Product release',
    slug: 'product-release',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Automatic syncronizations',
    slug: 'autosync',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Feedback Form',
    slug: 'feedback',
    url: 'https://forms.gle/rR2teKjU5LjAcnXz6',
    roles: ['designer', 'developer'],
    day: 2,
  },
]

const Blocks = (props) => {
  const pathPrefix = usePathname()

  return (
    <>
      {blocks.map((block) => {
        const link = block.url ? block.url : `${pathPrefix}/${block.slug}`
        const enabled = block.day === props.day || props.day === 'all'

        const blockCard = (
          <Card
            key={block.slug}
            heading={block.title}
            link={{ link: undefined, text: undefined }}
            className={enabled ? 'cursor-pointer p-5' : ''}
          >
            <div className="flex">
              <Badge part="developer" isHidden={!block.roles.includes('developer')} />
              <Badge part="designer" isHidden={!block.roles.includes('designer')} />
            </div>
          </Card>
        )

        return enabled ? (
          <Link href={link} key={block.title} className="cursor-pointer">
            {blockCard}
          </Link>
        ) : (
          <div className="hover:none opacity-80 grayscale filter" key={block.title}>
            {blockCard}
          </div>
        )
      })}
    </>
  )
}

export default function Handout({ canonical, baseUrl }) {
  return (
    <>
      <div className="container mx-auto mt-16 max-w-5xl">
        <div className="text-light-on-background-900 text-center">
          <Text variant="xlBolder" className="mb-6">
            <Emoji symbol="👋 " label="hand" />
            Welcome
          </Text>
          <Text variant="6xl" className="mb-32">
            Hands-on with design systems workshop handout.
          </Text>
          <Text variant="xlBolder" className="mb-6">
            {`What's next`}
            <Emoji symbol="👇" label="hand" />
          </Text>
        </div>
        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Blocks day={'all'} />
        </div>
      </div>
    </>
  )
}
