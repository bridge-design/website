import { Text } from "@bridge-the-gap/design-system";
import TwitterIcon from "../public/twitter.svg";
import LinkedinIcon from "../public/linkedin.svg";
import Link from "@components/link";
import classnames from "classnames";

export const people = [
  {
    name: "Varya Stepanova",
    avatar: "/varya.png",
    title: "Design systems architect and engineering manager",
    bio: `As an independent consultant, Varya helps companies to launch and
            boost their design systems. Her major focus is bridging the gap for
            designers, developers, and business specialists. That all is
            seasoned with extensive experience in component-driven UI
            development and a design degree.`,
    linkedin: "https://www.linkedin.com/in/varyastepanova/",
    twitter: "https://twitter.com/varya_en",
    align: "",
  },
  {
    name: "Sherif Saleh",
    avatar: "/sherif.png",
    title: "Senior product designer",
    bio: `Sherif is a senior product designer. He crafts deligthful experiences through data analytics, user research, prototypes and validation. Sherif has extensive experience with design systems and years of working for financial services, banks  and automotive.`,
    linkedin: "https://www.linkedin.com/in/salehsherif/",
    twitter: "https://twitter.com/sans_sherif",
    align: "reverse",
  },
  {
    name: "Irina Illustrova",
    avatar: "/irina.jpg",
    title: "Frontend Engineer",
    bio: `Irina is an UI/UX developer & frontend engineer, who has several years of experience in building modern applications with React.js. Her current focus is on design systems and development process optimizatons`,
    linkedin: "https://www.linkedin.com/in/illustrova/",
    twitter: "https://twitter.com/illustrova",
    align: "",
  },
];

export function People({ people }) {
  return (
    <>
      {people.map((person) => (
        <div
          key={person.name}
          className={classnames(
            "flex mt-16 flex-wrap md:flex-nowrap",
            person.align === "reverse" ? "md:flex-row-reverse" : "flex-row"
          )}
        >
          <div className="w-full mb-8 md:w-4/12 md:mb-0">
            <img
              src={person.avatar}
              alt={person.name}
              className="rounded-image"
            />
          </div>
          <div
            className={classnames(
              "flex  flex-col mt-4 w-full md:w-8/12 text-light-on-background-900 ",
              person.align === "reverse"
                ? "md:text-right md:pr-10"
                : "text-left md:pl-10"
            )}
          >
            <Text variant="4Xl" as="h3" className="mb-3">
              {person.name}
            </Text>
            <Text variant="xlBolder" className="mb-6">
              {person.title}
            </Text>
            <Text variant="base" className="mb-8">
              {person.bio}
            </Text>
            <div
              className={classnames(
                "flex mt-auto",
                person.align === "reverse" ? "md:justify-end" : ""
              )}
            >
              <Link
                href={person.twitter}
                className="cursor-pointer hover:opacity-60 group outline-0"
              >
                <TwitterIcon
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="p-1 mr-5 text-light-on-background-900 group-focus:ring-4 group-focus:ring-yellow-100 outline-0"
                  title="twitter"
                />
              </Link>
              <Link
                href={person.linkedin}
                className="cursor-pointer hover:opacity-60 group outline-0"
              >
                <LinkedinIcon
                  width="32"
                  height="32"
                  className="p-1 group-focus:ring-4 group-focus:ring-yellow-100 outline-0"
                  fill="currentColor"
                  title="linkedin"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
