import { Text, Emoji, Card, Icon, CtaLink } from "@bridge-the-gap/design-system";
import { NextSeo } from "next-seo";
import Link from "@components/link";

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="Bridge-the-Gap"
        description="We team up with designers and developers to build and scale design systems"
        keywords="Design system, design system workshop, design system team"
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Bridge-the-Gap.dev",
        }}
      />
      <div className="text-center">
        <Text as="h1" variant="7Xl" className="max-w-5xl mx-auto mb-[14%]">
          We team up with designers and developers to build and scale design systems.
        </Text>
        <CtaLink href="/contact" as={Link} underline className="animate-fadeindelay">
          Start a conversation
        </CtaLink>
      </div>
    </>
  );
}
