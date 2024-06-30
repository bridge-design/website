"use client";
import { CtaLink, Text } from "@bridge-the-gap/design-system";
import { usePathname } from "next/navigation";

import Link from "@/components/link";

export const metadata = {
  title: "Handout materials for Hands-on with Design Systems Workshop",
  description: "All the necessary documentation for the participants of the workshop",
  keywords:
    "design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hands-on-workshop.goright.io/handout",
    site_name: "GoRight.io",
  },
};

export default function LayoutHandout({ title, children }) {
  const pathname = usePathname();

  const getParentPath = (currentPath) => {
    const normalizedPath = currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
    const lastSlashIndex = normalizedPath.lastIndexOf("/");

    return lastSlashIndex === -1 ? "/" : normalizedPath.substring(0, lastSlashIndex + 1);
  };

  const mainPagePath = pathname ? getParentPath(pathname) : "./";

  return (
    <div className="grow py-8 bg-white border-b">
      <div className="flex bg-white min-w-100">
        <div className="container max-w-2xl py-2 mx-auto mb-8 text-xl text-left">
          <CtaLink arrow="start" as={Link} href={mainPagePath} underline={true}>
            Back to the Main page
          </CtaLink>
        </div>
      </div>
      <Text variant="6Xl" className="w-full my-2 text-center text-light-on-background-900">
        {title}
      </Text>
      <div className="px-4 mx-auto my-8 prose text-justify ">{children}</div>
    </div>
  );
}
