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
      <Section className="mb-20">
        <div className="flex flex-col md:flex-row">
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
      <Section className="mb-20">
        <h2 className="font-4xl text-center text-4xl">Workshop content</h2>

        <table className="text-light-on-background-900 mt-16 w-full table-auto font-lg text-lg leading-lg tracking-lg">
          <caption className="text-2Xl sm:text-smMedium mb-2 text-left font-2Xl leading-2Xl tracking-2Xl sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium md:mb-5">
            Day 1
          </caption>
          <tbody>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  9:00-9:30
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Introduction
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Say Hi 👋
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  9:30-10:00
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Teams
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Icebreaker exercise
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  10:00-10:40
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design and process
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Setting up Figma project and project repository
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  10:40-11:15
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design and process
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  UI inventory and scoping
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  11:15-11:45
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Lunch break
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium"></span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  11:45-12:00
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design and process
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  UI inventory discussion
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  12:00-12:30
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Designing and building the library
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design tokens foundation. Intro to visual regression testing
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  12:30-13:00
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Designing and building the library
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Hands-on practice
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="text-light-on-background-900 mt-16 w-full table-auto font-lg text-lg leading-lg tracking-lg">
          <caption className="text-2Xl sm:text-smMedium mb-2 text-left font-2Xl leading-2Xl tracking-2Xl sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium md:mb-5">
            Day 2
          </caption>
          <tbody>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  9:00-10:45
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Designing and building the library
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Coding and documenting the components. New design challenge
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  10:45-11:00
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design system lifecycle
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Versioning and release. Documenting components in ZeroHeight
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  11:00-11:30
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  LUNCH BREAK
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium"></span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  11:30-12:30
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design system lifecycle
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Hands-on update and release
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  12:30-13:00
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Recap
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Q&amp;A session and discussion
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section>
        <h2 className="font-4xl text-center text-4xl">Deliverables</h2>
        <p className="font-lg text-lg leading-lg tracking-lg">
          By the end of the workshop, each team has a ready-to-use component library, an end product
          built out of that, and a tuned process to ensure smooth updates.
        </p>
        <figure className="mt-10">
          <div className="relative mx-auto max-w-4xl w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              title="Deliverables"
              width="888"
              src="https://www.youtube.com/embed/RWECCt6rDPU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
              className="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
          <figcaption className="text-light-on-background-500 mt-2 text-center font-sm text-sm leading-sm tracking-sm">
            Sneak peek: Changes in Figma design tokens are automatically reflected in the components
            and exported to code.
          </figcaption>
        </figure>
      </Section>
    </>
  )
}

export default HandsOnDesignSystemsPage
