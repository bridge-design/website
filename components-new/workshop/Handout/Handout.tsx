'use client'

import React from 'react'
import { Badge, Card } from '@bridge-the-gap/design-system'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { handoutBlocks } from '@/data/workshops/hands-on-design-systems/handout'

interface HandoutProps {}

interface BlocksProps {
  day: number | 'all'
}

const Blocks: React.FC<BlocksProps> = ({ day }) => {
  const pathPrefix = usePathname()

  return (
    <>
      {handoutBlocks.map((block) => {
        const link = block.url ? block.url : `${pathPrefix}/${block.slug}`
        const enabled = block.day === day || day === 'all'

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

export const Handout: React.FC<HandoutProps> = () => {
  return (
    <div className="container mx-auto mt-16 max-w-5xl">
      <div className="text-light-on-background-900 text-center">
        <h2 className="mb-6 text-xl font-bold">👋 Welcome</h2>
        <h1 className="mb-32 text-6xl">Hands-on with design systems workshop handout.</h1>
        <h2 className="mb-6 text-xl font-bold">What's next 👇</h2>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        <Blocks day={'all'} />
      </div>
    </div>
  )
}
