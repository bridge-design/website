import React from "react";
import { Text, Card, Badge, Emoji } from "@bridge-the-gap/design-system";
import Link from "@components/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const blocks = [
  {
    title: "Workshop flow",
    slug: "workshop-flow",
    roles: [],
  },
  {
    title: "Making a toast",
    slug: "toast",
    roles: ["designer", "developer"],
  },
  {
    title: "Figma setup",
    slug: "figma-setup",
    roles: ["designer"],
  },
  {
    title: "Repository setup",
    slug: "repo-setup",
    roles: ["developer"],
  },
  {
    title: "UI inventory",
    slug: "ui-inventory",
    roles: ["developer", "designer"],
  },
  {
    title: "Design tokens",
    slug: "design-tokens",
    roles: ["designer"],
  },
  {
    title: "Coding the library",
    slug: "coding-library",
    roles: ["developer"],
  },
  {
    title: "Releasing the library",
    slug: "releasing-library",
    roles: ["developer"],
  },
  {
    title: "Product update",
    slug: "product-update",
    roles: ["developer"],
  },
  {
    title: "Design Changes",
    slug: "re-design",
    roles: ["designer"],
  },
  {
    title: "Cast in code",
    slug: "cast-in-code",
    roles: ["developer"],
  },
  {
    title: "Product release",
    slug: "product-release",
    roles: ["developer"],
  },
  // {
  //   title: "Visual regression tests",
  //   image: TestingIcon,
  //   slug: "visual-tests",
  //   roles: ["developer"],
  // },
  {
    title: "Automatic syncronizations",
    // image: SyncIcon,
    slug: "autosync",
    roles: ["developer"],
  },
  {
    title: "Feedback Form",
    // image: FeedbackIcon,
    slug: "feedback",
    url:
      "https://docs.google.com/forms/d/124ha3LG7-07rizB9yjoqNGkB31Yzw6jtFvImsz7-Utg",
    roles: ["designer", "developer"],
  },
];

const Blocks = (props) => {
  const router = useRouter();
  const pathPrefix = router.asPath;

  return (
    <>
      {blocks.map((block) => {
        const link = block.url ? block.url : `${pathPrefix}${block.slug}`;

        const enabled = block.day === props.day || props.day === "all";

        const blockCard = (
          <Card
            key={block.slug}
            heading={block.title}
            link={{ link: undefined, text: undefined }}
            className={enabled ? "cursor-ponter p-5" : ""}
          >
            <div className="flex">
              <Badge
                role="developer"
                isHidden={!block.roles.includes("developer")}
              />
              <Badge
                role="designer"
                isHidden={!block.roles.includes("designer")}
              />
            </div>
          </Card>
        );

        return enabled ? (
          <Link href={link} key={block.title} className="cursor-pointer">
            {blockCard}
          </Link>
        ) : (
          <div
            className="filter grayscale sopacity-80 hover:none"
            key={block.title}
          >
            {blockCard}
          </div>
        );
      })}
    </>
  );
};

export default function HandoutPage({ canonical, baseUrl, ...props }) {
  return (
    <>
      <NextSeo
        noindex={true}
        nofollow={true}
        title="Handout materials for Hands-on with Design Systems Workshop"
        description="All the necessary documentation for the participants of the workshop"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        canonical={canonical}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://hands-on-workshop.goright.io/handout",
          site_name: "GoRight.io",
          images: [
            {
              url: baseUrl + "/poster.png",
              width: 800,
              height: 600,
              alt: "Hands-on Workshop poster",
            },
          ],
        }}
      />

      <div className="container max-w-5xl mx-auto mt-16">
        <div className="text-center text-light-on-background-900">
          <Text variant="xlBolder" className="mb-6">
            <Emoji symbol="👋 " label="hand" />
            Welcome
          </Text>
          <Text variant="6xl" className="mb-32">
            Hands-on with design systems workshop handout.
          </Text>
          <Text variant="xlBolder" className="mb-6">
            What's next
            <Emoji symbol="👇" label="hand" />
          </Text>
        </div>
        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <Blocks />
        </div>
      </div>
    </>
  );
}
