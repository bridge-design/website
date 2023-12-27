import classnames from "classnames";
import TwitterIcon from "../public/twitter.svg";
import LinkedinIcon from "../public/linkedin.svg";
import Link from "@components/link";
import SectionTitle from "@components/SectionTitle";

import { People } from "@components/People";
import { team } from "content/team";

export default function WhoAreWe() {
  const people = Object.values(team);
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <SectionTitle icon="Group32">Who We Are</SectionTitle>
      <People people={people.slice(0, 2)} />
    </div>
  );
}
