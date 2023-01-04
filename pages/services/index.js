import { Text, CtaLink, Testimonial } from "@bridge-the-gap/design-system";
import { NextSeo } from "next-seo";
import Link from "@components/link";

export const TestimonialTitle = (
  <Text variant="3Xl" as="h2">
    People Say
  </Text>
);

export const testimonials = [
  {
    name: "Junaid Rasheed",
    avatar: "/sampleImages/rasheed_avatar.png",
    text: "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-primary-100 text-light-on-background-900",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/sampleImages/rasheed_avatar.png",
    text: "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-primary-500 text-light-on-background-100",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/sampleImages/rasheed_avatar.png",
    text: "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-light-background-50 text-light-on-background-100",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/sampleImages/rasheed_avatar.png",
    text: "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-primary-100 text-light-on-background-900",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/sampleImages/rasheed_avatar.png",
    text: "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-primary-500 text-light-on-background-100",
  },
  {
    name: "Junaid Rasheed",
    avatar: "/sampleImages/rasheed_avatar.png",
    text: "Varya is an expert in Design System domain. I have had chance to work with her in past and I",
    colors: "bg-light-background-50 text-light-on-background-50",
  },
];

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
      <Text as="h2" variant="3xl" className="mt-32 animate-fadein animate-reveal">
        Design System for teams and enterprises
      </Text>
      <Text as="h2" variant="3xl" className="mt-10 animate-fadein animate-reveal">
        Design Sytem processes
      </Text>
      <Text as="h2" variant="3xl" className="mt-10 animate-fadein animate-reveal">
        How it works
      </Text>
      <Testimonial testimonials={testimonials} title={TestimonialTitle} />
      <Text as="h2" variant="3xl" className="mt-10 animate-fadein animate-reveal">
        Meet the team
      </Text>
      <div></div>
    </>
  );
}
