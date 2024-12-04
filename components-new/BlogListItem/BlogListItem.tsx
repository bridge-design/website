import React from 'react'
// import { formatDate } from '@/utils/formatDate'
import { Link } from '../Link/Link'

interface BlogPost {
  path: string
  date: string
  title: string
  description?: string
  tags?: string[]
}

interface BlogListItemProps {
  post: BlogPost
}

/**
 * Renders a single blog post item with title, description, and metadata.
 */
export const BlogListItem: React.FC<BlogListItemProps> = ({ post }) => {
  const { path, date, title, description } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <li className="py-4">
      <hr className="mb-8" />
      <article>
        <Link href={`/${path}`} className="hover:text-[var(--btg-color-link)]">
          <h3 className="mb-4 text-3xl font-semibold">{title}</h3>
          <p className="mb-4 text-lg text-[var(--btg-bloglistitem-description-color)]">
            {description}
          </p>
          <span className="font-semibold">Read →</span>
          <dl className="mt-2 inline-flex items-center space-x-4">
            <dt className="sr-only">Published on</dt>
            <dd className="font-medium text-[var(--btg-bloglistitem-date-color)]">
              <time dateTime={date}>{formattedDate}</time>
            </dd>
          </dl>
        </Link>
      </article>
    </li>
  )
}

BlogListItem.displayName = 'BlogListItem'

export default BlogListItem
