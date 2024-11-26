import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

import { BlogList, HorizontalWave, Pagination, Section } from '@/components-new/index'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({
  title: 'Blog',
  description: `Explore insightful articles on design systems, UX, and UI development
    at Bridge-the-Gap Blog. Dive into the knowledge we share to bridge the gap between
    designers and developers, enhancing collaboration and innovation.`,
})

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-teal); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <h1 className="font-5xl mb-16 text-center text-5xl">The klowledge we share</h1>
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:px-10 lg:py-11">
          <BlogList posts={initialDisplayPosts} />
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            basePath={'blog'}
          />
        </div>
      </Section>
    </>
  )
}
