import { CtaLink, Text } from "@bridge-the-gap/design-system";
import Link from "@components/link";
import MDXComponents from "@components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function LayoutBlog({ title, seo, layout, ...props }) {
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

  const blogPagePath = currentPath ? getParentPath(currentPath) : "./";

  return (
    <>
      <NextSeo
        title={title + " - Blog - Bridge-the-Gap"}
        description="Sharing our knowledge and experience"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://bridge-the-gap.dev/blog",
          site_name: "Bridge-the-Gap.dev",
          images: [
            {
              url: `/images${router.asPath}thumb.png`,
              alt: title,
            },
          ],
        }}
        {...seo}
      />
      <div className="grow py-8 bg-white">
        <div className="flex bg-white min-w-100">
          <div className="w-full max-w-2xl px-4 py-2 mx-auto my-8 mb-8 text-xl text-left ">
            <CtaLink arrow="start" as={Link} href={blogPagePath}>
              Back to Blog
            </CtaLink>
          </div>
        </div>
        <Text variant="6Xl" className="w-full mt-12 mb-24 text-center text-light-on-background-900">
          {title}
        </Text>
        <div className="px-4 md:mx-auto my-8 prose text-justify">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      </div>
    </>
  );
}
