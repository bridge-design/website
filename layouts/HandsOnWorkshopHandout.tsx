'use client'

import React, { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { HandsOnWorkshopHandout } from 'contentlayer/generated'
import { CtaLink, Text } from '@bridge-the-gap/design-system'
import { usePathname } from 'next/navigation'

import { Link } from '@/components-new/index'

interface LayoutProps {
  content: CoreContent<HandsOnWorkshopHandout>
  children: ReactNode
}

export default function LayoutHandsOnWorkshopHandout({ content, children }: LayoutProps) {
  const { title } = content
  const pathname = usePathname()

  const getParentPath = (currentPath) => {
    const normalizedPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath
    const lastSlashIndex = normalizedPath.lastIndexOf('/')

    return lastSlashIndex === -1 ? '/' : normalizedPath.substring(0, lastSlashIndex + 1)
  }

  const mainPagePath = pathname ? getParentPath(pathname) : './'

  return (
    <div className="grow border-b bg-white py-8">
      <div className="min-w-100 flex bg-white">
        <div className="mx-auto mb-8 max-w-2xl py-2 text-left text-xl">
          <CtaLink arrow="start" as={Link} href={mainPagePath} underline={true}>
            Back to the Main page
          </CtaLink>
        </div>
      </div>
      <Text variant="6Xl" className="text-light-on-background-900 my-2 w-full text-center">
        {title}
      </Text>
      <div className="prose mx-auto my-8 px-4 text-justify">{children}</div>
    </div>
  )
}
