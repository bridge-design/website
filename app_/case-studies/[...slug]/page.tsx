import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allCaseStudies } from 'contentlayer/generated'
import type { CaseStudies } from 'contentlayer/generated'
import CaseStudyLayout from '@/layouts/CaseStudyLayout'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

const defaultLayout = 'CaseStudyLayout'
const layouts = {
  CaseStudyLayout,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allCaseStudies.find((p) => p.slug === slug)
  // const authorList = post?.authors || ['default']
  // const authorDetails = authorList.map((author) => {
  //   const authorResults = allAuthors.find((p) => p.slug === author)
  //   return coreContent(authorResults as Authors)
  // })
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  // const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      // authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  return allCaseStudies.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allCaseStudies))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const post = allCaseStudies.find((p) => p.slug === slug) as CaseStudies
  // const authorList = post?.authors || ['default']
  // const authorDetails = authorList.map((author) => {
  //   const authorResults = allAuthors.find((p) => p.slug === author)
  //   return coreContent(authorResults as Authors)
  // })
  const mainContent = coreContent(post)
  // const jsonLd = post.structuredData
  // jsonLd['author'] = authorDetails.map((author) => {
  //   return {
  //     '@type': 'Person',
  //     name: author.name,
  //   }
  // })

  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <Layout content={mainContent} team={post.team}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}