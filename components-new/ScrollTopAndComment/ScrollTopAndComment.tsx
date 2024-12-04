'use client'

import React, { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

interface ScrollTopAndCommentProps {
  commentId?: string
}

export const ScrollTopAndComment: React.FC<ScrollTopAndCommentProps> = ({
  commentId = 'comment',
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      setShow(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollToComment = () => {
    document.getElementById(commentId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
:root {
--btg-color-scroll-background: var(--btg-color-neutral-500);
--btg-color-scroll-background-hover: var(--btg-color-neutral-400);
--btg-color-scroll-color: var(--btg-color-neutral-800);
}

.dark-theme:root {
  --btg-color-scroll-background: var(--btg-color-neutral-600);
  --btg-color-scroll-background-hover: var(--btg-color-neutral-700);
  --btg-color-scroll-color: var(--btg-color-neutral-300);
}

@media (prefers-color-scheme: dark) {
  :root {
    --btg-color-scroll-background: var(--btg-color-neutral-600);
    --btg-color-scroll-background-hover: var(--btg-color-neutral-700);
    --btg-color-scroll-color: var(--btg-color-neutral-300);
  }
}
    `}</style>
      <div
        className={`fixed bottom-8 right-8 flex-col gap-3 ${
          show ? 'flex' : 'hidden'
        } transition-all md:flex`}
      >
        {siteMetadata.comments?.provider && (
          <button
            aria-label="Scroll To Comment"
            onClick={handleScrollToComment}
            className="rounded-full bg-[var(--btg-color-scroll-background)] p-2 text-[var(--btg-color-scroll-color)] transition-all hover:bg-[var(--btg-color-scroll-background-hover)]"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        <button
          aria-label="Scroll To Top"
          onClick={handleScrollTop}
          className="rounded-full bg-[var(--btg-color-scroll-background)] p-2 text-[var(--btg-color-scroll-color)] transition-all hover:bg-[var(--btg-color-scroll-background-hover)]"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
