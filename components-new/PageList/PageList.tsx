import React from 'react'
import PageListItem from '../PageListItem/PageListItem'

export interface Page {
  path: string
  title: string
  description?: string
  date?: string
}

interface PageListProps<T extends Page> {
  pages: T[]
  ItemComponent?: React.ComponentType<T>
}

/**
 * A list of pages rendered in a structured layout.
 */
export const PageList = <T extends Page>({ pages, ItemComponent = PageListItem as unknown as React.ComponentType<T> }: PageListProps<T>) => {
  if (!pages.length) {
    return <p>No pages found.</p>
  }

  return (
    <>
      <style>{`
:root {
  --btg-pagelistitem-description-color: var(--btg-color-neutral-200);
  --btg-pagelistitem-date-color: var(--btg-color-neutral-400);
}

.dark-theme:root {
  --btg-pagelistitem-description-color: var(--btg-color-neutral-900);
  --btg-pagelistitem-date-color: var(--btg-color-neutral-700);
}

@media (prefers-color-scheme: dark) {
  :root {
    --btg-pagelistitem-description-color: var(--btg-color-neutral-900);
    --btg-pagelistitem-date-color: var(--btg-color-neutral-700);
  }
}
    `}</style>
      <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8">
        {pages.map((page) => (
          <ItemComponent key={page.path} {...page} />
        ))}
      </ul>
    </>
  )
}

export const DefaultPageList = PageList<Page>

PageList.displayName = 'PageList'

export default DefaultPageList
