import React from 'react'
import { Link } from '../Link/Link'

interface PageListItemProps {
  path: string
  title: string
  description?: string
  date?: string
}

/**
 * Renders a page list item with title, description, and optional metadata.
 */
export const PageListItem: React.FC<PageListItemProps> = ({ path, title, description, date }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <li className="py-4">
      <hr className="mb-8" />
      <article>
        <Link href={`/${path}`} className="hover:text-[var(--btg-color-link)]">
          <h3 className="mb-4 text-3xl font-semibold">{title}</h3>
          {description && (
            <p className="mb-4 text-lg text-[var(--btg-pagelistitem-description-color)]">
              {description}
            </p>
          )}
          {formattedDate && (
            <>
              <span className="font-semibold">Read →</span>
              <dl className="mt-2 inline-flex items-center space-x-4">
                <dt className="sr-only">Published on</dt>
                <dd className="font-medium text-[var(--btg-pagelistitem-date-color)]">
                  <time dateTime={date}>{formattedDate}</time>
                </dd>
              </dl>
            </>
          )}
        </Link>
      </article>
    </li>
  )
}

PageListItem.displayName = 'PageListItem'

export default PageListItem 