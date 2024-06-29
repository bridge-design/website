import { People } from "@/components/People";
import { team } from "content/team";

export const metadata = {
  title: "Bridge-the-Gap team",
  description: "Design system team",
  keywords: "Design systems, team design systems, build design system, design system consultant",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "Bridge-the-Gap.dev",
  },
};

export default function About() {
  const people = Object.values(team);

  return <People people={people} />;
}
