import React from 'react'
import PageListItem from '../PageListItem/PageListItem'

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

  return <PageListItem path={path} title={title} description={description} date={date} />
}

BlogListItem.displayName = 'BlogListItem'

export default BlogListItem
