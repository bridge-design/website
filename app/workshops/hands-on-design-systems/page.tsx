import { genPageMetadata } from 'app/seo'

import { HorizontalWave, Section, DsPartsExercise } from '@/components-new/index'

export const metadata = genPageMetadata({
  title: 'Hands-on with Design Systems',
  description: `2-day workshop on building a design system with Figma and React`,
})

const HandsOnDesignSystemsPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <p className="text-center text-5xl">👋 Hands-on</p>
        <h1 className="font-5xl mb-16 text-center text-5xl">
          2-day workshop on building <span className="md:block">a design system</span>
          <span className="md:block">with Figma and React</span>
        </h1>
      </Section>
      <Section>
        <div className="mx-auto mt-28 flex max-w-4xl flex-col md:flex-row">
          <div className="flex w-full flex-shrink-0 items-start justify-start md:w-2/5 md:flex-col">
            <h2 className="font-3xl leading-3xl tracking-3xl sm:font-6xl sm:leading-6xl sm:tracking-6xl text-3xl sm:text-6xl">
              What you <span className="md:block">will learn?</span>
            </h2>
          </div>
          <div className="mt-16 font-lg text-lg leading-lg tracking-lg md:mt-0">
            <p className="mb-6">
              This workshop helps you learn and practice design systems working in a team. You can
              join as a designer or developer.
            </p>
            <p className="mb-6">
              The designers define visual design language and Figma components. At the same time,
              the developers create the components with React. You practice iterative
              component-driven design and development and create documentation along with making the
              product. The exercise contains managing collaborative updates and keeping the code in
              sync with the design reality.
            </p>
            <p>
              By the end of the workshop, each team has a ready-to-use component library, an end
              product built out of that, and a tuned process to ensure smooth updates.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default HandsOnDesignSystemsPage
