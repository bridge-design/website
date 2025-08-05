import React from 'react'
import { PageList } from '../PageList/PageList'
import BlogListItem from '../BlogListItem/BlogListItem'

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

const BlogItemWrapper = (props: BlogPost) => <BlogListItem post={props} />

/**
 * A list of blog posts rendered in a structured layout.
 */
export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return <PageList pages={posts} ItemComponent={BlogItemWrapper} />
}

BlogList.displayName = 'BlogList'

export default BlogList
