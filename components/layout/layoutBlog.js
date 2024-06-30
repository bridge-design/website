"use client";
import { CtaLink, Text } from "@bridge-the-gap/design-system";
import { usePathname } from "next/navigation";

import Link from "@/components/link";

export default function LayoutBlog({ title, children }) {
  const pathname = usePathname();

  const getParentPath = (currentPath) => {
    const normalizedPath = currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
    const lastSlashIndex = normalizedPath.lastIndexOf("/");

    return lastSlashIndex === -1 ? "/" : normalizedPath.substring(0, lastSlashIndex + 1);
  };

  const blogPagePath = pathname ? getParentPath(pathname) : "/";

  // const thumbPath = thumb ? `${thumb.src}` : `${router.basePath}/images${router.asPath}thumb.png`;

  return (
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
      <div className="px-4 md:mx-auto my-8 prose text-justify">{children}</div>
    </div>
  );
}
