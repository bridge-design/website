import { MDXProvider } from "@mdx-js/react";
import Link from "@components/link";
import { Text, CtaLink } from "@bridge-the-gap/design-system";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";


const MDXComponents = {
  a: Link,
};
export default function HandoutLayout({
  title,
  seo,
  layout,
  children,
  ...props
}) {
  const router = useRouter();
  const currentPath = router.asPath;
  const meta = { title, ...seo };

  const getParentPath = (currentPath) => {
    if (currentPath.endsWith("/")) {
      currentPath = currentPath.substring(0, currentPath.length - 1); //make sure there is no trailing slash
    }
    const pathParts = currentPath.split("/");
    pathParts.pop();

    return pathParts.join("/") + "/"; // add trailing slash
  };

  const mainPagePath = currentPath ? getParentPath(currentPath) : "./";

  return (
    <>
      <NextSeo
        title="Handout materials for Hands-on with Design Systems Workshop"
        description="All the necessary documentation for the participants of the workshop"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://hands-on-workshop.goright.io/handout",
          site_name: "GoRight.io",
        }}
        {...seo}
      />
      <div className="grow py-8 bg-white border-b">
        <div className="flex bg-white min-w-100">
          <div className="container max-w-2xl py-2 mx-auto mb-8 text-xl text-left">
            <CtaLink
              arrow="start"
              as={Link}
              href={mainPagePath}
              underline={true}
            >
              Back to the Main page
            </CtaLink>
          </div>
        </div>
        <Text
          variant="6Xl"
          className="w-full my-2 text-center text-light-on-background-900"
        >
          {title}
        </Text>
        <div className="px-4 mx-auto my-8 prose text-justify ">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </div>
      </div>
    </>
  );
}
