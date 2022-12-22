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
      <div className="mt-48 text-center">
        <Text as="h1" variant="7Xl" className="max-w-5xl mx-auto mb-40">
          We team up with designers and developers to build and scale design systems.
        </Text>
        <CtaLink
          href="/hands-on-workshop"
          as={Link}
          underline
          className="text-xl animate-fadeindelay"
        >
          Start a conversation
        </CtaLink>
      </div>
    </>
  );
}
