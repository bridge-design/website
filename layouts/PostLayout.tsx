import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
// import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

import { CtaLink, Text } from '@bridge-the-gap/design-system'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, title } = content
  const basePath = path.split('/')[0]

  return (
    <>
      {/* <SectionContainer> */}
      <ScrollTopAndComment />
      <article>
        <div className="light:bg-white grow py-8 dark:bg-black">
          <div className="min-w-100 light:bg-white dark:bg-dark flex">
            <div className="mx-auto my-8 mb-8 w-full max-w-2xl px-4 py-2 text-left text-xl">
              <CtaLink arrow="start" as={Link} href={`/${basePath}`}>
                Back to the Blog
              </CtaLink>
            </div>
          </div>
        </div>
        <Text
          variant="6Xl"
          className="mb-24 mt-12 w-full text-center text-light-on-background-900 dark:text-white"
        >
          {title}
        </Text>
        <div className="prose my-8 px-4 text-justify dark:prose-invert md:mx-auto">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="not-prose font-medium leading-6 text-base text-gray-500 dark:text-white">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </dd>
            </div>
          </dl>
        </div>
        <div className="prose my-8 px-4 text-justify dark:prose-invert md:mx-auto">{children}</div>
      </article>
      {/* </SectionContainer> */}
    </>
  )
}
