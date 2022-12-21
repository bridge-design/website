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
      <div className="max-w-[615px] mt-48 text-left">
        <Text as="h1" variant="5Xl" className="max-w-4xl mb-10">
          We team up with designers and developers to build and scale design systems.
        </Text>
        <Text as="p" variant="2Xl">
          Bridge the gap agency is a strategic partner for fast-growing tech companies in need of a
          scalable tools with a modular design system, to ship products to market faster.
        </Text>
        <CtaLink
          href="/hands-on-workshop"
          as={Link}
          underline
          className="mt-14 animate-fadeindelay"
        >
          Get in touch
        </CtaLink>
      </div>
    </>
  );
}
