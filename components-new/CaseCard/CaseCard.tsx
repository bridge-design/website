import React from 'react'
import Link from '../Link/Link'
import * as styles from './CaseCard.module.css'

interface CasePost {
  slug: string
  title: string
  description?: string
  logo?: {
    src: string
    alt: string
  }
}

interface CaseCardProps {
  casePost: CasePost
}

export const CaseCard: React.FC<CaseCardProps> = ({ casePost }) => {
  return (
    <Link
      href={`/case-studies/${casePost.slug}`}
      className={`${styles.case} group block transition-transform hover:translate-x-0`}
    >
      <div className="flex flex-col items-center overflow-hidden rounded-lg bg-[var(--btg-color-neutral-900)] p-4 text-center shadow-sm transition hover:bg-[var(--btg-color-neutral-800)] sm:flex-row sm:text-left">
        {casePost.logo && (
          <img
            src={casePost.logo.src}
            alt={casePost.logo.alt}
            className="mb-4 max-w-[140px] px-4 sm:mb-0 sm:mr-4"
          />
        )}
        <div className="relative flex flex-col">
          <h3 className="font-3xl mb-2 text-3xl">{casePost.title}</h3>
          {casePost.description && <p className="font-lg text-lg">{casePost.description}</p>}
        </div>
      </div>
    </Link>
  )
}
