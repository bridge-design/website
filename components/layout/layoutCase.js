"use client";
import { CtaLink, Text } from "@bridge-the-gap/design-system";
import Link from "@/components/link";
import ProjectTeam from "@/components/ProjectTeam";
import { usePathname } from "next/navigation";

export default function LayoutCase({ title, team, children }) {
  const pathname = usePathname();

  const getParentPath = (currentPath) => {
    const normalizedPath = currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
    const lastSlashIndex = normalizedPath.lastIndexOf("/");

    return lastSlashIndex === -1 ? "/" : normalizedPath.substring(0, lastSlashIndex + 1);
  };

  const blogPagePath = pathname ? getParentPath(pathname) : "/";

  return (
    <div className="py-8 bg-white grow">
      <div className="flex bg-white min-w-100">
        <div className="w-full max-w-2xl py-2 mx-auto my-8 mb-8 text-xl text-left ">
          <CtaLink arrow="start" as={Link} href={blogPagePath}>
            Back to Case Studies
          </CtaLink>
        </div>
      </div>
      <Text variant="6Xl" className="w-full mt-12 mb-24 text-center text-light-on-background-900">
        {title}
      </Text>
      {team && team.length > 0 && <ProjectTeam team={team} />}
      <div className="px-4 my-8 prose text-justify md:mx-auto">{children}</div>
    </div>
  );
}
