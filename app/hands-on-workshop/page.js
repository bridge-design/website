import { Card, Emoji, Text } from "@bridge-the-gap/design-system";
import CustomWorkshop from "@/components/CustomWorkshop";
import Deliverables from "@/components/Deliverables";
import Link from "@/components/link";
import localTime from "@/components/local-time";
import PeopleSay from "@/components/PeopleSay";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import WhoAreWe from "@/components/WhoAreWe";
import WhyAttend from "@/components/WhyAttend";
import WorkshopContent from "@/components/WorkshopContent";

export const metadata = {
  title: "Hands-on with Design Systems: 2-day workshop with Figma & React",
  description:
    "This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer.",
  keywords:
    "design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development",
  canonical: "https://goright.io/hands-on-workshop",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goright.io/hands-on-workshop",
    site_name: "GoRight.io",
    images: [
      {
        url: "/poster.png",
        width: 800,
        height: 600,
        alt: "Hands-on Workshop poster",
      },
    ],
  },
};

export default function Workshop() {
  return (
    <>
      {/***** HERO SECTION *****/}
      <div className="leading-normal tracking-normal text-center text-light-on-background-900">
        <Text as="p" variant="xlMedium" className="mt-24">
          <Emoji symbol="👋 " label="hand" />
          Hands-on
        </Text>
        <Text as="h1" variant="6Xl" className="max-w-3xl mx-auto mt-4">
          2-day workshop on{"\u00A0"}building{"\u00A0"}a design system with{" "}
          <span className="md:block">
            <Text as="span" variant="6Xl" highlight="yellow-100">
              Figma
            </Text>{" "}
            and{" "}
            <Text as="span" variant="6Xl" highlight="primary-100">
              React
            </Text>
            .
          </span>
        </Text>
        {/* <Text variant="xlBolder" className="mt-16">
          Upcoming workshops
          <Emoji symbol="👇" label="hand" />
        </Text> */}
        <div className="grid grid-cols-1 gap-10 mt-24 sm:grid-cols-2 md:grid-cols-3">
          <Card
            className="hover:!cursor-default hover:!bg-neutral-300 bg-neutral-300 opacity-70 [&_a]:!cursor-default [&_a]:!text-gray-600 [&_span]:!transform-none"
            key="september"
            heading={`2 & 3 DECEMBER ${localTime(9, 13)}`}
            link={{
              text: "Grab your ticket",
              //href: "https://www.eventbrite.ch/e/hands-on-with-design-systems-december-tickets-185528118597",
            }}
            //linkComponent={Link}
          >
            <div className="mb-8">
              <Text variant="smMedium" className="mb-3">
                Available tickets:
              </Text>
              <p>Designers: SOLD OUT</p>
              <p>Developers: SOLD OUT</p>
            </div>
          </Card>
          <Card
            className="min-h-[240px]"
            heading="Need a custom workshop for your team?"
            link={{ text: "Let's talk", href: "/contact" }}
            linkComponent={Link}
          >
            <div className="mb-8">
              <Text variant="smMedium" className="mb-3">
                At the moment, we do not plan public workshops. But we will be happy to arrange a
                private workshop for your team
              </Text>
            </div>
          </Card>
        </div>
      </div>
      <WhatYouWillLearn />
      <WorkshopContent />
      <Deliverables />
      <WhyAttend />
      {/* Hidden until confirmation that we can use these logos */}
      {/* <TeamsAttended /> */}
      <PeopleSay />
      <WhoAreWe />
      <CustomWorkshop />
    </>
  );
}
