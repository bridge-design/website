import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allWorkshopHandouts } from 'contentlayer/generated'
import HandoutLayout from '@/components/workshop/layoutHandout'

const defaultLayout = 'HandoutLayout'
const layouts = {
  HandoutLayout,
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = `handout/${decodeURI(params.slug.join('/'))}`
  // Filter out drafts in production

  const post = allWorkshopHandouts.find((p) => p.slug === slug)
  const mainContent = coreContent(post)

  const Layout = layouts[defaultLayout]

  return (
    <>
      <Layout content={mainContent} team={post.team}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
