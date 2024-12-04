import React from 'react'
import { BlogListItem } from '../BlogListItem/BlogListItem'

interface BlogPost {
  path: string
  date: string
  title: string
  description?: string
  tags?: string[]
}

interface BlogListProps {
  posts: BlogPost[]
}

/**
 * A list of blog posts rendered in a structured layout.
 */
export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  if (!posts.length) {
    return <p>No posts found.</p>
  }

  return (
    <>
      <style>{`
:root {
  --btg-bloglistitem-description-color: var(--btg-color-neutral-200);
  --btg-bloglistitem-date-color: var(--btg-color-neutral-400);
}

.dark-theme:root {
  --btg-bloglistitem-description-color: var(--btg-color-neutral-900);
  --btg-bloglistitem-date-color: var(--btg-color-neutral-700);
}

@media (prefers-color-scheme: dark) {
  :root {
    --btg-bloglistitem-description-color: var(--btg-color-neutral-900);
    --btg-bloglistitem-date-color: var(--btg-color-neutral-700);
  }
}
    `}</style>
      <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8">
        {posts.map((post) => (
          <BlogListItem key={post.path} post={post} />
        ))}
      </ul>
    </>
  )
}

BlogList.displayName = 'BlogList'

export default BlogList
