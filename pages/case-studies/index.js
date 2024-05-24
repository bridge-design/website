import { Text } from '@bridge-the-gap/design-system';
import { NextSeo } from 'next-seo';
import Link from '@components/link';

import { getAllCases } from '../../lib/api';

export default function CaseStudies({ pageProps: { cases } }) {
  return (
    <>
      <NextSeo
        title="Bridge-the-Gap case studies"
        description="All the great things we have done for our clients"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          site_name: 'Bridge-the-Gap.dev',
        }}
      />
      <div className="leading-normal tracking-normal text-light-on-background-900">
        <Text as="h1" variant="6Xl" className="max-w-3xl mx-auto my-24 mb-12 text-center">
          Case Studies
        </Text>

        <div className="grid grid-cols-1 gap-20 px-10 md:grid-cols-1 lg:grid-cols-1 py-11">
          {cases &&
            cases.length > 0 &&
            cases.map((post) => <CaseCard key={post.title} casePost={post} />)}
        </div>
      </div>
    </>
  );
}

const CaseCard = ({ casePost }) => {
  return (
    <Link
      href={`/case-studies/${casePost.slug}`}
      key={casePost.title}
      className="group-hover:translate-x-0"
    >
      <div
        key={casePost.title}
        className="flex flex-row overflow-hidden text-center align-center bg-light-on-background-100"
      >
        {casePost.logo && <img src={casePost.logo} className="max-w-[140px] mx-auto my-4 px-4" />}
        <div className="relative flex flex-row p-4 group">
          <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out translate-x-full rounded bg-light-background-100 group-hover:translate-x-0" />
          <div>
            <Text
              as="h3"
              variant="3Xl"
              className="relative z-10 mb-4 text-left text-light-background-100 group-hover:text-light-on-background-50"
            >
              {casePost.title}
            </Text>
            <Text
              as="p"
              variant="lg"
              className="relative z-10 mb-4 text-left group-hover:text-light-on-background-50"
            >
              {casePost.description}
            </Text>
          </div>
          <div className="z-10 self-center justify-center invisible w-20 text-lg text-center text-white group-hover:visible">
            →
          </div>
        </div>
      </div>
    </Link>
  );
};

export async function getStaticProps() {
  const cases = getAllCases();
  return {
    props: { cases },
  };
}
