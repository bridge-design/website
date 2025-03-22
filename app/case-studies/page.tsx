import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { CaseCard, HorizontalWave, Section } from '@/components-new/index'
import { allCaseStudies } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Innocative Case Studies',
  description: `Explore detailed case studies showcasing our expertise in UI engineering,
  design systems, and frontend development. Learn how Bridge the Gap has helped companies
  like Yara International, F-Secure, AppOmni, METRO, and Elisa achieve exceptional digital
  experiences.`,
  keywords: `UI engineering case studies, design systems projects, frontend development success stories,
  digital transformation, user experience improvement, React components, accessibility audit`,
})

export default function CaseStudiesPage() {
  const cases = allCoreContent(sortPosts(allCaseStudies))

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <h1 className="mb-16 text-center font-5xl text-5xl">Case Studies</h1>
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:px-10 lg:py-11">
          {cases.map((casePost) => (
            <CaseCard key={casePost.slug} casePost={casePost} />
          ))}
        </div>
      </Section>
    </>
  )
}
