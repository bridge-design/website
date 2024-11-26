import React from 'react'
import { Link } from '../Link/Link'

interface PaginationProps {
  totalPages: number
  currentPage: number
  basePath?: string
}

/**
 * Pagination component for navigating between paginated pages.
 */
export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  basePath = '/',
}) => {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  const generatePageLink = (page: number) =>
    page === 1 ? `/${basePath}` : `/${basePath}/page/${page}`

  return (
    <div className="mx-auto mb-12 mt-4 w-full max-w-3xl">
      <nav className="flex items-center justify-between">
        {/* Previous Button */}
        {!prevPage ? (
          <button
            className="cursor-not-allowed text-sm font-medium text-gray-500 opacity-50"
            disabled
          >
            Previous
          </button>
        ) : (
          <Link
            href={generatePageLink(currentPage - 1)}
            rel="prev"
            className="text-sm font-medium text-[var(--btg-color-link)] hover:underline"
          >
            Previous
          </Link>
        )}

        {/* Current Page Information */}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next Button */}
        {!nextPage ? (
          <button
            className="cursor-not-allowed text-sm font-medium text-gray-500 opacity-50"
            disabled
          >
            Next
          </button>
        ) : (
          <Link
            href={generatePageLink(currentPage + 1)}
            rel="next"
            className="text-sm font-medium text-[var(--btg-color-link)] hover:underline"
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

Pagination.displayName = 'Pagination'

export default Pagination
