import { Text } from "@bridge-the-gap/design-system";
import { NextSeo } from "next-seo"


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
          className="max-w-4xl mx-auto mt-4 animate-fadein animate-reveal"
        >
          We team up with designers and developers to build and scale{"\n"}
          <Text as="span" variant="6Xl" highlight="yellow-100">
            design systems
          </Text>
          .
        </Text>
    </>
  )
}