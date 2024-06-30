import { CtaLink, Text } from "@bridge-the-gap/design-system";

import Link from "@/components/link";

export const metadata = {
  title: "Bridge-the-Gap",
  description: "We team up with designers and developers to build and scale design systems",
  keywords: "Design system, design system workshop, design system team",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "Bridge-the-Gap.dev",
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
