import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components-new/MDXComponents'
import {
  CtaLink,
  HorizontalWave,
  ScrollTopAndComment,
  Section,
  Outro,
} from '@/components-new/index'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allEvents } from 'contentlayer/generated'
import type { Events } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { outroContent } from '@/data/outro-content'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const event = allEvents.find((p) => p.slug === slug)

  if (!event) {
    return
  }

  const publishedAt = new Date(event.date).toISOString()
  const modifiedAt = new Date(event.lastmod || event.date).toISOString()
  let imageList = [siteMetadata.socialBanner]
  if (event.images) {
    imageList = typeof event.images === 'string' ? [event.images] : event.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: event.title,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  return allEvents.map((p) => ({ slug: p.slug?.split('/').map((name) => decodeURI(name)) }))
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const sortedCoreContents = allCoreContent(sortPosts(allEvents))
  const eventIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (eventIndex === -1) {
    return notFound()
  }

  const event = allEvents.find((p) => p.slug === slug) as Events
  const mainContent = coreContent(event)

  // Check if this is a breakfast event based on the slug
  const isBreakfastEvent = slug.startsWith('breakfast-')

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <ScrollTopAndComment />
      <Section>
        <div className="mx-auto max-w-[80ch]">
          <CtaLink
            to="/events"
            arrow="start"
            className="text-xl"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
          >
            Back to all events
          </CtaLink>
        </div>
        <article className="grow">
          <h1 className="mb-16 text-center font-5xl text-5xl">{event.title}</h1>
          <div className="prose mx-auto my-12 text-justify dark:prose-invert">
            <MDXLayoutRenderer code={event.body.code} components={components} toc={event.toc} />
          </div>
        </article>
      </Section>
      {isBreakfastEvent && (
        <Outro backgroundColor="var(--btg-hero-background-pink)">
          <div className="text-center">
            <h2 className="mx-auto mb-10 font-4xl text-4xl lg:w-4/5">
              {outroContent['breakfast-speaking'].title}
            </h2>
            <p className="mx-auto mb-10 text-xl lg:w-3/4">
              {outroContent['breakfast-speaking'].description}
            </p>
          </div>
        </Outro>
      )}
    </>
  )
}
