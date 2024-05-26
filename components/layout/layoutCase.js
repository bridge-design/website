import { MDXProvider } from "@mdx-js/react";
import Link from "@components/link";
import { Text, CtaLink } from "@bridge-the-gap/design-system";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { team as btgTeam } from "content/team";
import MDXComponents from "@components/MDXComponents";

export default function LayoutCase({ title, seo, layout, team, ...props }) {
  const router = useRouter();
  const currentPath = router.asPath;

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
          url: "https://bridge-the-gap.dev/case-studies",
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
        <div className="px-4 my-8 prose text-justify md:mx-auto">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      </div>
    </>
  );
}

export const ProjectTeam = ({ team }) => {
  return (
    <div className="flex justify-center w-full">
      {team.map((name) => (
        <Avatar key={name} name={name} />
      ))}
    </div>
  );
};

const Avatar = ({ name }) => {
  return (
    <div className="relative flex mb-8 -mr-4 group flex-column ">
      <div className="w-12 h-12 overflow-hidden border-2 rounded-full border-light-on-background-300 group group-hover:scale-105 transition-200">
        <img
          src={btgTeam[name].photoUrl}
          title={btgTeam[name].name}
          alt={btgTeam[name].name}
          className="w-full rounded-full"
        />
      </div>
      <p className="w-20 absolute invisible h-8 text-center -left-1/2 tranlate-x-0.5 text-small -bottom-8 group-hover:visible text-xs">
        {btgTeam[name].name}
      </p>
    </div>
  );
};
