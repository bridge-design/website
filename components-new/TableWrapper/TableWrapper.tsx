'use client'

import React, { ReactNode } from 'react'

interface TableWrapperProps {
  /** Children components, typically table rows and cells */
  children: ReactNode
}

/**
 * A wrapper component for tables, adding responsiveness with horizontal scrolling.
 */
export const TableWrapper: React.FC<TableWrapperProps> = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">{children}</table>
    </div>
  )
}

TableWrapper.displayName = 'TableWrapper'

export default TableWrapper
