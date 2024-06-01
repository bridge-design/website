import { People } from "@components/People";
import { team } from "content/team";
import { NextSeo } from "next-seo";
export default function About() {
  const people = Object.values(team);
  return (
    <>
      <NextSeo
        title="Bridge-the-Gap team"
        description="Design system team"
        keywords="Design systems, team design systems, build design system, design system consultant"
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Bridge-the-Gap.dev",
        }}
      />
      <People people={people} />
    </>
  );
}
