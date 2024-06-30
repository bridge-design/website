import { team } from "content/team";

import { People } from "@/components/People";
import SectionTitle from "@/components/SectionTitle";

export default function WhoAreWe() {
  const people = Object.values(team);
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <SectionTitle icon="Group32">Who We Are</SectionTitle>
      <People people={people.slice(0, 3)} />
    </div>
  );
}
