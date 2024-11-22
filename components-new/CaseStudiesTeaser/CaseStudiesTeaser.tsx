import React from 'react'
import { LogosCloud } from '../LogosCloud/LogosCloud'

interface CasePost {
  title: string
  slug: string
  logo: {
    src: string
    alt: string
  }
  description?: string
}

interface CaseStudiesTeaserProps {
  casePosts: CasePost[]
}

export const CaseStudiesTeaser: React.FC<CaseStudiesTeaserProps> = ({ casePosts }) => {
  const logos = casePosts.map((post) => ({
    src: post.logo.src,
    alt: post.logo.alt,
    link: `/case-studies/${post.slug}`,
  }))

  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row-reverse lg:gap-16">
      {/* Logos Column */}
      <div className="lg:w-2/5">
        <LogosCloud logos={logos} />
      </div>

      {/* Case Studies Column */}
      <div className="lg:w-3/5">
        <ul className="space-y-4">
          {casePosts.map((post, index) => (
            <li key={index}>
              <a
                href={`/case-studies/${post.slug}`}
                className="text-lg font-medium text-[var(--btg-color-link)] hover:underline"
              >
                {post.title}
              </a>
              <br />
              {post.description && (
                <a
                  href={`/case-studies/${post.slug}`}
                  className="text-[var(--btg-color-link) mt-2 hidden text-sm lg:block"
                >
                  {post.description}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
