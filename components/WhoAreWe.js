import classnames from "classnames";
import TwitterIcon from "../public/twitter.svg";
import LinkedinIcon from "../public/linkedin.svg";
import Link from "@components/link";
import SectionTitle from "@components/SectionTitle";

import { people, People } from "@components/People";


export default function WhoAreWe() {
  return (
    <div className="max-w-4xl mx-auto mt-28">
      <SectionTitle icon="Group32">Who We Are</SectionTitle>
      <People people={people.slice(0,2)} />
    </div>
  );
}
