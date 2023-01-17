import {
  Text,
  CtaLink,
  Testimonial,
  Advantages,
  ProfileCard,
  HelpTeams,
} from "@bridge-the-gap/design-system";
import { NextSeo } from "next-seo";
import Link from "@components/link";
import BreadCrumbsArrows from "@components/BreadCrumbsArrows";
import MeatTheTeam from "@components/MeatTheTeam";
import { CONTENT, HOW_IT_WORKS, TESTIMONIALS } from "./content";

const TestimonialTitle = (
  <Text variant="3Xl" as="h2" className="mt-32">
    People Say
  </Text>
);

export default function Services() {
  return (
    <>
      <NextSeo
        title="Bridge-the-Gap team"
        description="Our services"
        keywords="Design systems, team design systems, build design system, design system consultant"
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Bridge-the-Gap.dev",
        }}
      />
      <Text
        as="h1"
        variant="6Xl"
        className="max-w-[950px] mx-auto mt-56 text-center animate-fadein animate-reveal"
      >
        Design system speeds building digital products and time to market
      </Text>
      <Text
        as="h2"
        variant="xl"
        className="max-w-4xl mx-auto mt-10 text-center animate-fadein animate-reveal"
      >
        A reusable components library enabling organization teams to build products efficiently.
      </Text>
      <CtaLink
        href="/hands-on-workshop"
        as={Link}
        underline
        className="flex justify-center w-full text-xl mt-28 animate-fadeindelay"
      >
        Start a conversation
      </CtaLink>
      <Text as="h2" variant="3xl" className="mt-32 mb-6 animate-fadein animate-reveal">
        Design System for teams and enterprises
      </Text>
      <Advantages colorSchema="dark" content={CONTENT} />
      <Text as="h2" variant="3xl" className="mt-32 animate-fadein animate-reveal">
        Design Sytem processes
      </Text>
      <BreadCrumbsArrows />
      <Text as="h2" variant="3xl" className="mt-32 mb-10 animate-fadein animate-reveal">
        How it works
      </Text>
      <Advantages colorSchema="light" content={HOW_IT_WORKS} />
      <HelpTeams className="mt-24" photoUrl="/images/meet-the-team/rectangle_14.png" />
      <Testimonial testimonials={TESTIMONIALS} title={TestimonialTitle} />
      <MeatTheTeam />
    </>
  );
}
