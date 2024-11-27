import { Card, Emoji, Text } from '@bridge-the-gap/design-system'

import CustomWorkshop from '@/components-old/workshop/CustomWorkshop'
import Deliverables from '@/components-old/workshop/Deliverables'
import { Link, Section } from '@/components-new/index'
import localTime from '@/components-old/workshop/local-time'
import PeopleSay from '@/components-old/workshop/PeopleSay'
import WhatYouWillLearn from '@/components-old/workshop/WhatYouWillLearn'
import WhoAreWe from '@/components-old/workshop/WhoAreWe'
import WhyAttend from '@/components-old/workshop/WhyAttend'
import WorkshopContent from '@/components-old/workshop/WorkshopContent'

export const metadata = {
  title: 'Hands-on with Design Systems: 2-day workshop with Figma & React',
  description:
    'This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer.',
  keywords:
    'design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development',
  canonical: 'https://goright.io/hands-on-workshop',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goright.io/hands-on-workshop',
    site_name: 'GoRight.io',
    images: [
      {
        url: '/poster.png',
        width: 800,
        height: 600,
        alt: 'Hands-on Workshop poster',
      },
    ],
  },
}

export default function Workshop() {
  return (
    <>
      <Section>
        <main className="text-light-on-background-900 max-w-full dark:text-white">
          <div className="tracking-normal text-light-on-background-900 text-center leading-normal">
            <p className="mt-24 font-xl text-xl">
              <span role="img" aria-label="hand">
                👋{' '}
              </span>
              Hands-on
            </p>
            <h1 className="text-5Xl mx-auto mt-4 max-w-3xl font-5Xl">
              2-day workshop on &nbsp; building &nbsp; a design system with{' '}
              <span className="md:block">
                <span className="text-6Xl font-6Xl leading-6Xl tracking-6Xl" highlight="yellow-100">
                  Figma
                </span>{' '}
                and{' '}
                <span
                  className="text-6Xl font-6Xl leading-6Xl tracking-6Xl"
                  highlight="primary-100"
                >
                  React
                </span>
                .
              </span>
            </h1>
            <div className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="border-light-on-background-900 hover:bg-primary-50 text-light-on-background-900 hover:!bg-neutral-30 [&amp;_a]:!cursor-default [&amp;_a]:!text-gray-600 [&amp;_span]:!transform-none flex h-full flex-col rounded-lg border bg-neutral-300 p-6 text-left opacity-70 hover:!cursor-default hover:cursor-pointer">
                <h3 className="text-2Xl mb-6 text-left font-2Xl leading-2Xl tracking-2Xl">
                  2 &amp; 3 DECEMBER 9-13 PST
                </h3>
                <div className="mb-8">
                  <p className="text-smMedium mb-3 font-smMedium leading-smMedium tracking-smMedium">
                    Available tickets:
                  </p>
                  <p>Designers: SOLD OUT</p>
                  <p>Developers: SOLD OUT</p>
                </div>
                <div className="mt-auto">
                  <a className="text-primary-500 hover:text-primary-700 group inline-flex cursor-pointer items-center bg-no-repeat font-lg text-lg leading-lg tracking-lg">
                    <span className="no">Grab your ticket</span>
                  </a>
                </div>
              </div>
              <div className="border-light-on-background-900 hover:bg-primary-50 text-light-on-background-900 flex h-full min-h-[240px] flex-col rounded-lg border p-6 text-left hover:cursor-pointer">
                <h3 className="text-2Xl mb-6 text-left font-2Xl leading-2Xl tracking-2Xl">
                  Need a custom workshop for your team?
                </h3>
                <div className="mb-8">
                  <p className="text-smMedium mb-3 font-smMedium leading-smMedium tracking-smMedium">
                    At the moment, we do not plan public workshops. But we will be happy to arrange
                    a private workshop for your team
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-700 group inline-flex cursor-pointer items-center bg-no-repeat font-lg text-lg leading-lg tracking-lg"
                  >
                    <span className="no">Let's talk', href: '/contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-28 flex max-w-4xl flex-col md:flex-row">
            <div className="flex w-full flex-shrink-0 items-start justify-start md:w-2/5 md:flex-col">
              <h2 className="text-3Xl sm:text-6Xl font-3Xl leading-3Xl tracking-3Xl sm:font-6Xl sm:leading-6Xl sm:tracking-6Xl">
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
                component-driven design and development and create documentation along with making
                the product. The exercise contains managing collaborative updates and keeping the
                code in sync with the design reality.
              </p>
              <p>
                By the end of the workshop, each team has a ready-to-use component library, an end
                product built out of that, and a tuned process to ensure smooth updates.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-28 max-w-4xl">
            <div className="flex items-start">
              <h2 className="text-3Xl sm:text-6Xl font-3Xl leading-3Xl tracking-3Xl sm:font-6Xl sm:leading-6Xl sm:tracking-6Xl">
                Workshop content
              </h2>
            </div>
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
          </div>
          <div className="mx-auto mt-28 max-w-4xl">
            <div className="flex items-start">
              <h2 className="text-3Xl sm:text-6Xl font-3Xl leading-3Xl tracking-3Xl sm:font-6Xl sm:leading-6Xl sm:tracking-6Xl">
                Deliverables
              </h2>
            </div>
            <p className="mt-10 font-lg text-lg leading-lg tracking-lg">
              By the end of the workshop, each team has a ready-to-use component library, an end
              product built out of that, and a tuned process to ensure smooth updates.
            </p>
            <figure className="mt-10">
              <div className="aspect-w-5 aspect-h-3 w-full">
                <iframe
                  title="Deliverables"
                  width="888"
                  src="https://www.youtube.com/embed/RWECCt6rDPU"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  className="item-center"
                ></iframe>
              </div>
              <figcaption className="text-light-on-background-500 mt-2 text-center font-sm text-sm leading-sm tracking-sm">
                Sneak peek: Changes in Figma design tokens are automatically reflected in the
                components and exported to code.
              </figcaption>
            </figure>
          </div>
          <div className="mx-auto mt-28 max-w-4xl">
            <div className="flex items-start">
              <h2 className="text-3Xl sm:text-6Xl font-3Xl leading-3Xl tracking-3Xl sm:font-6Xl sm:leading-6Xl sm:tracking-6Xl">
                Why Attend
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
              <div className="">
                <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Designer</h3>
                <ul className="list mt-6 list-inside list-disc">
                  <li>Practice UI inventory</li>
                  <li className="mt-3">Run brand-changes in nearly zero time</li>
                  <li className="mt-3">Learn how to organize the components in Figma</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Developer</h3>
                <ul className="list mt-6 list-inside list-disc">
                  <li>Practice component-driven development</li>
                  <li className="mt-3">Learn tips and tricks of making a pattern library</li>
                  <li className="mt-3">Practice React, Storybook, and styled-components</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Team</h3>
                <ul className="list mt-6 list-inside list-disc">
                  <li>Automate design and development processes</li>
                  <li className="mt-3">
                    Learn to work with a design system in a multifunctional team
                  </li>
                  <li className="mt-3">
                    Practice DS development cycle: create, maintain and keep coherent
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-28 max-w-4xl overflow-x-visible">
            <PeopleSay />
          </div>
          <div className="mx-auto mt-28 max-w-4xl">
            <div className="flex items-start">
              <h2 className="text-3Xl sm:text-6Xl font-3Xl leading-3Xl tracking-3Xl sm:font-6Xl sm:leading-6Xl sm:tracking-6Xl">
                Who We Are
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap items-stretch justify-center gap-10 lg:flex lg:flex-col dark:text-black">
              <div className="bg-light-on-background-200 flex min-w-min flex-col items-start justify-between gap-4 overflow-hidden rounded-[4px] px-4 py-4 sm:flex-row sm:px-0 sm:py-0 lg:max-h-min lg:max-w-full">
                <img
                  src="/images/meet-the-team/varya.png"
                  alt="Varya Stepanova"
                  className="max-w-[306px] rounded-l-[4px] object-contain"
                />
                <div className="flex w-full flex-col justify-between sm:py-4 lg:min-h-[342px] lg:pl-6 lg:pr-10 xl:py-10">
                  <p className="text-2XlMedium text-2XlMedium mb-2 font-2XlMedium leading-2XlMedium tracking-2XlMedium">
                    Varya Stepanova
                  </p>
                  <p className="mb-6 font-base text-base leading-base tracking-base">
                    Design Systems Architect and Engineering Manager
                  </p>
                  <div className="flex flex-1 flex-col justify-between">
                    <p className="mb-2 flex-1 font-base text-base leading-base tracking-base">
                      Varya has over 20 years of expertise in UI engineering and frontend
                      development. A pioneer in the field, she started working with design systems
                      even before the term was widely recognized. With a remarkable 9 years in
                      consultancy, including 4 years as an independen consultant, Varya specializes
                      in helping companies launch and enhance their design systems Her work focuses
                      on bridging the gap between designers, developers, and business specialists,
                      leveraging her extensive experience in component-driven UI development and her
                      background in design.
                    </p>
                    <div className="flex justify-center gap-[10%] justify-self-end lg:justify-start">
                      <a
                        href="https://twitter.com/varya_en"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M11.5475,25.7523c9.0566,0,14.0102-7.5034,14.0102-14.0102,0-.2131,0-.4253-.0144-.6365,.9637-.697,1.7955-1.5601,2.4566-2.5488-.8987,.3982-1.852,.6594-2.8282,.7747,1.0279-.6154,1.7972-1.5833,2.1648-2.7235-.9666,.5736-2.024,.9778-3.1267,1.1952-1.8648-1.9829-4.984-2.0786-6.9669-.2138-1.2788,1.2026-1.8214,2.9947-1.4245,4.7047-3.9591-.1985-7.6479-2.0685-10.1482-5.1446-1.3069,2.2499-.6394,5.1282,1.5245,6.5731-.7836-.0232-1.5501-.2346-2.2349-.6163v.0624c.0006,2.3439,1.6529,4.3628,3.9504,4.8269-.7249,.1977-1.4855,.2266-2.2234,.0845,.6451,2.0058,2.4937,3.38,4.6003,3.4195-1.7436,1.3703-3.8975,2.1142-6.1152,2.112-.3918-.0008-.7832-.0245-1.1722-.071,2.2518,1.4451,4.8719,2.2116,7.5475,2.208"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/varyastepanova/"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4 H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3 H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://github.com/varya"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light-on-background-200 flex min-w-min flex-col items-start justify-between gap-4 overflow-hidden rounded-[4px] px-4 py-4 sm:flex-row-reverse sm:px-0 sm:py-0 sm:pl-4 lg:max-h-min lg:max-w-full lg:pl-6">
                <img
                  src="/images/meet-the-team/irina.png"
                  alt="Irina Illustrova"
                  className="max-w-[306px] rounded-l-[4px] object-contain"
                />
                <div className="flex w-full flex-col justify-between sm:py-4 lg:min-h-[342px] lg:pl-6 lg:pr-10 xl:py-10">
                  <p className="text-2XlMedium text-2XlMedium mb-2 font-2XlMedium leading-2XlMedium tracking-2XlMedium">
                    Irina Illustrova
                  </p>
                  <p className="mb-6 font-base text-base leading-base tracking-base">
                    Senior UI Engineer
                  </p>
                  <div className="flex flex-1 flex-col justify-between">
                    <p className="mb-2 flex-1 font-base text-base leading-base tracking-base">
                      Irina is seasoned UI/UX Engineer with a profound expertise in various
                      technologies (React, Web Components, Vue etc) and its ecosystem. Irina is
                      adept at managing complex architectural and infrastructural tasks Her
                      comprehensive experience with multiple design systems, coupled with a
                      business-oriented mindset, enables her to maintain a high technical level in
                      projects while aligning with management goals. Additionally, Irina's
                      leadership skills shine in her ability to effectively guide and mentor other
                      engineers, making her an invaluable asset to any team.
                    </p>
                    <div className="flex justify-center gap-[10%] justify-self-end lg:justify-start">
                      <a
                        href="https://twitter.com/illustrova"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M11.5475,25.7523c9.0566,0,14.0102-7.5034,14.0102-14.0102,0-.2131,0-.4253-.0144-.6365,.9637-.697,1.7955-1.5601,2.4566-2.5488-.8987,.3982-1.852,.6594-2.8282,.7747,1.0279-.6154,1.7972-1.5833,2.1648-2.7235-.9666,.5736-2.024,.9778-3.1267,1.1952-1.8648-1.9829-4.984-2.0786-6.9669-.2138-1.2788,1.2026-1.8214,2.9947-1.4245,4.7047-3.9591-.1985-7.6479-2.0685-10.1482-5.1446-1.3069,2.2499-.6394,5.1282,1.5245,6.5731-.7836-.0232-1.5501-.2346-2.2349-.6163v.0624c.0006,2.3439,1.6529,4.3628,3.9504,4.8269-.7249,.1977-1.4855,.2266-2.2234,.0845,.6451,2.0058,2.4937,3.38,4.6003,3.4195-1.7436,1.3703-3.8975,2.1142-6.1152,2.112-.3918-.0008-.7832-.0245-1.1722-.071,2.2518,1.4451,4.8719,2.2116,7.5475,2.208"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/illustrova/"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4 H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3 H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://github.com/Illustrova"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light-on-background-200 flex min-w-min flex-col items-start justify-between gap-4 overflow-hidden rounded-[4px] px-4 py-4 sm:flex-row sm:px-0 sm:py-0 lg:max-h-min lg:max-w-full">
                <img
                  src="/images/meet-the-team/sherif.png"
                  alt="Sherif Saleh"
                  className="max-w-[306px] rounded-l-[4px] object-contain"
                />
                <div className="flex w-full flex-col justify-between sm:py-4 lg:min-h-[342px] lg:pl-6 lg:pr-10 xl:py-10">
                  <p className="text-2XlMedium text-2XlMedium mb-2 font-2XlMedium leading-2XlMedium tracking-2XlMedium">
                    Sherif Saleh
                  </p>
                  <p className="mb-6 font-base text-base leading-base tracking-base">
                    Design Manager
                  </p>
                  <div className="flex flex-1 flex-col justify-between">
                    <p className="mb-2 flex-1 font-base text-base leading-base tracking-base">
                      Sherif is a senior product designer. He crafts deligthful experiences through
                      data analytics, user research, prototypes and validation. Sherif has extensive
                      experience with design systems and years of working for financial services,
                      banks and automotive.
                    </p>
                    <div className="flex justify-center gap-[10%] justify-self-end lg:justify-start">
                      <a
                        href="https://www.linkedin.com/in/salehsherif/"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4 H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3 H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://github.com/sherifsaleh"
                        className="hover:color-light-on-background-800"
                      >
                        <svg
                          focusable="false"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-28 max-w-4xl">
            <div className="flex items-start">
              <h2 className="text-3Xl sm:text-6Xl font-3Xl leading-3Xl tracking-3Xl sm:font-6Xl sm:leading-6Xl sm:tracking-6Xl">
                Want a custom workshop for your team?
              </h2>
            </div>
            <p className="mt-16 flex font-lg text-lg leading-lg tracking-lg">
              Need a custom version? We can tailor this workshop for your company. When focused on
              your product and taking into account your team shape, the workshop outcome is not only
              a training session but also your design system's kick-off. We'll walk through the
              design system process, how to get started and how to fit it into your existing design
              processes. There will be an opportunity for the team to discuss questions they might
              have about implementing a design system.
            </p>
            <a
              href="/contact"
              className="text-xlBolder font-2xlBolder tracking-xlBolder leading-xlBolder bg-primary-200 text-light-background-900 hover:bg-light-background-50 font-xlBolder mt-8 inline-flex w-64 items-center justify-center rounded-xl px-5 px-6 py-2 py-4 text-2xl text-xl transition duration-300 ease-in focus:ring-4 focus:ring-yellow-100 focus:ring-offset-1"
              as="a"
              target="_blank"
              rel="noopener"
            >
              Let's talk
            </a>
          </div>
        </main>
      </Section>
    </>
  )
}
