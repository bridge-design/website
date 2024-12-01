import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components-new/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allWorkshopHandouts } from 'contentlayer/generated'
import HandoutLayout from '@/layouts/WorkshopHandout'

const defaultLayout = 'HandoutLayout'
const layouts = {
  HandoutLayout,
}

export async function generateStaticParams() {
  const paths = allWorkshopHandouts.map((handout) => ({
    slug: handout.slug.split('/').slice(1),
  }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = `handout/${decodeURI(params.slug.join('/'))}`
  // Filter out drafts in production

  const post = allWorkshopHandouts.find((p) => p.slug === slug)
  // Check if post is undefined and handle accordingly
  if (!post) {
    return <div>Post not found</div> // Or any other error handling you prefer
  }
  const mainContent = coreContent(post)

  const Layout = layouts[defaultLayout]

  return (
    <>
      <Layout content={mainContent}>
        <MDXLayoutRenderer code={post.body.code} components={components} />
      </Layout>
    </>
  )
}
