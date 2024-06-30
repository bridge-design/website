import { CtaLink, Text } from "@bridge-the-gap/design-system";

import Link from "@/components/link";

export const metadata = {
  title: "Bridge-The-Gap - design systems consulting and workshops",
  description: "We team up with designers and developers to build and scale design systems",
  keywords:
    "design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development",
  // canonical: "https://bridge-the-gap.dev",
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://bridge-the-gap.dev",
  //   site_name: "Bridge-the-Gap.dev",
  //   images: [
  //     {
  //       url: "https://bridge-the-gap.dev/seo/thumb.png",
  //       width: 1000,
  //       height: 750,
  //       alt: "Bridge-the-Gap — build and scale design systems",
  //       type: "image/png",
  //     },
  //   ],
  // },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default function Home() {
  return (
    <div className="text-center">
      <Text as="h1" variant="7Xl" className="max-w-5xl mx-auto mb-[14%]">
        We team up with designers and developers to build and scale design systems.
      </Text>
      <CtaLink
        href="/contact"
        as={Link}
        // onClick={() => (window.location = "mailto:mail@bridge-the-gap.dev")}
        underline
        className="animate-fadeindelay"
      >
        Start a conversation
      </CtaLink>
    </div>
  );
}
