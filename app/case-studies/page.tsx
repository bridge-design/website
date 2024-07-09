import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { Text } from '@bridge-the-gap/design-system'
import Link from '@/components/Link'
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

const CaseCard = ({ casePost }) => {
  return (
    <Link
      href={`/case-studies/${casePost.slug}`}
      key={casePost.title}
      className="group-hover:translate-x-0"
    >
      <div
        key={casePost.title}
        className="align-center flex flex-col overflow-hidden bg-light-on-background-100 text-center hover:bg-light-on-background-200 sm:flex-row"
      >
        {casePost.logo && <img src={casePost.logo} className="mx-auto my-4 max-w-[140px] px-4" />}
        <div className="relative flex flex-row p-4">
          <div
            className="absolute left-0 top-0 h-full w-full rounded"
            // transition-all duration-500 ease-out translate-x-full bg-light-background-100 group-hover:translate-x-0
          />
          <div>
            <Text
              as="h3"
              variant="3Xl"
              className="relative z-10 mb-4 text-left text-light-background-100"
              //group-hover:text-light-on-background-50
            >
              {casePost.title}
            </Text>
            <Text
              as="p"
              variant="lg"
              className="relative z-10 mb-4 text-left"
              //group-hover:text-light-on-background-50
            >
              {casePost.description}
            </Text>
          </div>
          {/* <div className="z-10 self-center justify-center invisible w-20 text-lg text-center text-white group-hover:visible">
            →
          </div> */}
        </div>
      </div>
    </Link>
  )
}

export default function CaseStudiesPage() {
  const cases = allCoreContent(sortPosts(allCaseStudies))

  return (
    <div className="leading-normal tracking-normal text-light-on-background-900">
      <Text as="h1" variant="6Xl" className="mx-auto my-24 mb-12 max-w-3xl text-center">
        Case Studies
      </Text>
      <div className="grid grid-cols-1 gap-20 px-10 py-11 md:grid-cols-1 lg:grid-cols-1">
        {cases &&
          cases.length > 0 &&
          cases.map((post) => <CaseCard key={post.title} casePost={post} />)}
      </div>
    </div>
  )
}
