import { ProfileCard } from "@bridge-the-gap/design-system";

export const people = [
  {
    photoUrl: "/images/meet-the-team/rectangle_60.png",
    name: "Varya Stepanova",
    role: "Design systems architect and engineering manager",
    description:
      "As an independent consultant, Varya helps companies to launch and boost their design systems. Her major focus is bridging the gap for designers, developers, and business specialists. That all is seasoned with extensive experience in component-driven UI development and a design degree.",
    twitter: "https://twitter.com/varya_en",
    linkedin: "https://www.linkedin.com/in/varyastepanova/",
    github: "https://github.com/varya",
  },
  {
    photoUrl: "/images/meet-the-team/rectangle_61.png",
    name: "Irina (Samoylova) Illustrova",
    role: "Senior Frontend Engineer",
    description:
      "Irina is an UI/UX developer & frontend engineer, who has several years of experience in building modern applications with React.js. Her current focus is on design systems and development process optimizatons",
    reverse: true,
    twitter: "https://twitter.com/illustrova",
    linkedin: "https://www.linkedin.com/in/illustrova/",
    github: "https://github.com/Illustrova",
  },
  {
    photoUrl: "/images/meet-the-team/rectangle_62.png",
    name: "Sherif Saleh",
    role: "Design manager",
    description:
      "Sherif is a senior product designer. He crafts deligthful experiences through data analytics, user research, prototypes and validation. Sherif has extensive experience with design systems and years of working for financial services, banks and automotive.",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/salehsherif/",
    github: "https://github.com/sherifsaleh",
  },
  {
    photoUrl: "/images/meet-the-team/rectangle_63.png",
    name: "Andriy Kotko",
    role: "Senior Frontend Engineer",
    reverse: true,
    twitter: "https://twitter.com/Kotkoa",
    linkedin: "https://www.linkedin.com/in/kotkoa/",
    github: "https://github.com/kotkoa",
  },
  {
    photoUrl: "/images/meet-the-team/rectangle_64.jpg",
    name: "Alexandra Stepanova",
    role: "Senior Frontend Developer",
    description: "Alexandra is an experienced front-end developer with a solid understanding of the back-end. Her attention to detail, strive for excellence, and excellent collaborative skills make her a valuable asset to any project.",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/alexandra-stepanova",
    github: "https://github.com/alexandra-stepanova",
  },
];

export function People({ people }) {
  return (
    <div className="flex flex-col gap-10 mt-10">
      {people.map((props) => (
        <ProfileCard key={props.name} {...props} />
      ))}
    </div>
  );
}
