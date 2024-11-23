import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

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
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      showSearch={false}
      title="The knowlegde we share"
    />
  )
}
