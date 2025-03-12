import { genPageMetadata } from 'app/seo'

import {
  Card,
  CtaLink,
  HorizontalWave,
  Outro,
  ProfileCard,
  Section,
  Testimonial,
} from '@/components-new/index'

import { TESTIMONIALS } from '@/data/testimonials'
import { team } from '@/data/team'

export const metadata = genPageMetadata({
  title: 'Hands-on with Design Systems',
  description: `workshop on building a design system with Figma, React, and Storybook`,
})

const HandsOnDesignSystemsPage = () => {
  // Filter testimonials by specific categories
  const filteredTestimonials = TESTIMONIALS.filter((testimonial) =>
    ['workshop', 'varya', 'sherif', 'irina'].includes(testimonial.category)
  )

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section narrow={true}>
        <p className="text-center text-5xl">👋 Hands-on</p>
        <h1 className="font-4xl mb-16 text-center text-4xl">
          workshop on building <span className="md:block">a design system</span>
          <span className="md:block">with Figma, React, and Storybook</span>
        </h1>
      </Section>
      <Section className="mb-20" narrow={true}>
        <Card>
          <div className="mt-16 font-lg text-lg leading-lg tracking-lg md:mt-0">
            <p className="mb-6">
              This workshop helps you learn and practice design systems while working in a team. You
              can join as a designer or developer.
            </p>
            <p className="mb-6">
              The designers define visual design language by creating a <b>tokens system</b> and
              design <b>theamable Figma components</b>. At the same time, the developers create the{' '}
              <b>component library with React</b> and <b>Storybook</b>. You practice iterative
              component-driven design and development and create documentation along with making the
              product. The exercise contains managing collaborative updates and keeping the code in
              sync with the design reality.
            </p>
            <p>
              By the end of the workshop, each team will have a ready-to-use component library, an
              end product built from it, and a refined process to ensure smooth updates.
            </p>
          </div>
        </Card>
      </Section>
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-center text-4xl">Workshop content</h2>

        <table className="text-light-on-background-900 mt-16 w-full table-auto font-lg text-lg leading-lg tracking-lg">
          {/* <caption className="text-2Xl sm:text-smMedium mb-2 text-left font-2Xl leading-2Xl tracking-2Xl sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium md:mb-5">
            Day 1
          </caption> */}
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
                  10:00-10:30
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
                  10:30-11:30
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
                  11:30-12:30
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Designing and building the library
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design tokens foundation, Tokens documentation in Storybook
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
                  13:00-13:30
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
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  13:30-14:30
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
                  14:30-15:30
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Design system lifecycle
                </span>
              </td>
              <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
                <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  Versioning, design update, and release
                </span>
              </td>
            </tr>
            <tr className="border-light-on-background-900 flex border-b py-3 md:py-6">
              <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                  15:30-16:00
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
      {/* <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-center text-4xl">Deliverables</h2>
        <p className="font-lg text-lg leading-lg tracking-lg">
          By the end of the workshop, each team has a ready-to-use component library, an end product
          built out of that, and a tuned process to ensure smooth updates.
        </p>
        <figure className="mt-10">
          <div className="relative mx-auto w-full max-w-4xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              title="Deliverables"
              width="888"
              src="https://www.youtube.com/embed/RWECCt6rDPU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              className="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
          <figcaption className="text-light-on-background-500 mt-2 text-center font-sm text-sm leading-sm tracking-sm">
            Sneak peek: Changes in Figma design tokens are automatically reflected in the components
            and exported to code.
          </figcaption>
        </figure>
      </Section> */}
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-center text-4xl">Why Attend</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
          <div className="">
            <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Designer</h3>
            <ul className="list mt-6 list-inside list-disc">
              <li>Practice UI inventory</li>
              <li className="mt-3">Lean how to create a scalable tokens system</li>
              <li className="mt-3">Learn how to organize the components in Figma</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Developer</h3>
            <ul className="list mt-6 list-inside list-disc">
              <li>Practice component-driven development</li>
              <li className="mt-3">Learn tips and tricks of making a pattern library</li>
              <li className="mt-3">Practice React, and customize Storybook</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Team</h3>
            <ul className="list mt-6 list-inside list-disc">
              <li>Automate design and development processes</li>
              <li className="mt-3">Learn to work with a design system in a multifunctional team</li>
              <li className="mt-3">
                Practice DS development cycle: create, maintain and keep coherent
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="mb-20" narrow={true}>
        <div className="container flex min-h-screen flex-col justify-between overflow-hidden">
          <Testimonial
            title={<h2 className="text-4xl">People Say</h2>}
            testimonials={filteredTestimonials}
          />
        </div>
      </Section>
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl mb-10 text-center text-4xl">Who We Are</h2>
        {['varya', 'sherif', 'irina'].map((key) => {
          const member = team[key]
          return (
            <ProfileCard
              key={member.name}
              photoUrl={member.photoUrl}
              name={member.name}
              role={member.role}
              twitter={member.twitter}
              linkedin={member.linkedin}
              github={member.github}
              description={member.description}
              className="mb-10"
            />
          )
        })}
      </Section>
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl mb-10 text-center text-4xl">
          Want a custom workshop for your team?
        </h2>
        <p className="mb-10 font-lg text-lg leading-lg tracking-lg">
          Need a custom version? We can tailor this workshop for your company. When focused on your
          product and taking into account your team shape, the workshop outcome is not only a
          training session but also your design system's kick-off. We'll walk through the design
          system process, how to get started and how to fit it into your existing design processes.
          There will be an opportunity for the team to discuss questions they might have about
          implementing a design system.
        </p>
        <div className="text-center">
          <CtaLink to="/contact" className="text-2xl" arrow="end" underline={true}>
            Let's talk
          </CtaLink>
        </div>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-blue)" />
    </>
  )
}

export default HandsOnDesignSystemsPage
