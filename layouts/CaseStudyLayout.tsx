import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { CaseStudies } from 'contentlayer/generated'
import Link from '@/components/Link'
import ProjectTeam from '@/components/ProjectTeam'
// import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

import { CtaLink, Text } from '@bridge-the-gap/design-system'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<CaseStudies>
  team: string[]
  children: ReactNode
}

export default function CaseStudyLayout({ content, children, team }: LayoutProps) {
  const { path, date, title } = content
  const basePath = path.split('/')[0]

  console.log('team', team)

  return (
    <>
      {/* <SectionContainer> */}
      <ScrollTopAndComment />
      <article>
        <div className="grow bg-white py-8">
          <div className="min-w-100 flex bg-white">
            <div className="mx-auto my-8 mb-8 w-full max-w-2xl px-4 py-2 text-left text-xl">
              <CtaLink arrow="start" as={Link} href={`/${basePath}`}>
                Back to Case Studies
              </CtaLink>
            </div>
          </div>
        </div>
        <Text variant="6Xl" className="text-light-on-background-900 mb-24 mt-12 w-full text-center">
          {title}
        </Text>
        {team && team.length > 0 && <ProjectTeam team={team} />}
        <div className="prose my-8 px-4 text-justify md:mx-auto">{children}</div>
      </article>
      {/* </SectionContainer> */}
    </>
  )
}