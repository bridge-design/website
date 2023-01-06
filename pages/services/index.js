import { Text, CtaLink, Testimonial, Advantages, ProfileCard } from "@bridge-the-gap/design-system";
import { NextSeo } from "next-seo";
import Link from "@components/link";
import ArrowIcon from "../../public/arrow.svg";
import ArrowLeftIcon from "../../public/arrow-left.svg";
import PhotoVaria from "../../public/images/meet-the-team/rectangle_60.png";
import PhotoIrina from "../../public/images/meet-the-team/rectangle_61.png";
import PhotoSherif from "../../public/images/meet-the-team/rectangle_62.png";
import PhotoAndriy from "../../public/images/meet-the-team/rectangle_63.png";

export const TestimonialTitle = (
  <Text variant="3Xl" as="h2" className="mt-32">
    People Say
  </Text>
);

const CONTENT = [
  {
    icon: "Rocket",
    title: "Coherent",
    description:
      "Ensuring that your company's identity and the experience it provides for customers is consistent across the board for all of your digital products.",
  },
  {
    icon: "UserIdentification",
    title: "5× Faster",
    description:
      "Reusing the same design and development components and patterns from a design system library. allows all organizational teams to create, test, and launch products more quickly.",
  },
  {
    icon: "TreeView",
    title: "Scalability",
    description:
      "Maintain and scale your products more easily. The entire product line will be aligned, so each new release will work seamlessly with all previous versions and updates (and vice versa)",
  },
];

const HOW_IT_WORKS = [
  {
    icon: "UserMultiple",
    title: "Meet the team",
    description: "Hiring an agency brings additional expertise and knowledge to your business",
  },
  {
    icon: "Cursor_1",
    title: "Workshop together",
    description: "Hiring an agency brings additional expertise and knowledge to your business",
  },
  {
    icon: "Network_3Reference",
    title: "Regular alignement",
    description: "Hiring an agency brings additional expertise and knowledge to your business",
  },
  {
    icon: "CircleDash",
    title: "Iterations",
    description: "Hiring an agency brings additional expertise and knowledge to your business",
  },
  {
    icon: "Task",
    title: "Agile",
    description: "Hiring an agency brings additional expertise and knowledge to your business",
  },
];

export const testimonials = [
  {
    name: "Nico Peham - Tech Lead at pcode",
    avatar: "",
    text: "Building a Design System 🛠️ Our members Marlene Höglinger and Nico Peham participated in the Hands-on with Design Systems workshop by Varya Stepanova and Sherif Saleh last week. It was about building design systems with Figma and React and gaining in-depth hands-on experience. It was especially exciting to see how other companies build their design systems and to exchange experiences.",
    colors: "bg-primary-100 text-light-on-background-900",
  },
  {
    name: "David Teissier - Directeur Général Publicom",
    avatar: "",
    text: "Sherif was a true professional in his business. Great skills in web design and UX. CSS has no secrets for him also. We worked together on web projects to large sizes.",
    colors: "bg-primary-500 text-light-on-background-100",
  },
  {
    name: "Junaid Rasheed",
    avatar: "",
    text: "Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.",
    colors: "bg-light-background-50 text-light-on-background-100",
  },
  {
    name: "Anthony Tahar - Webmarketing Master @ MEDISUR SAS",
    avatar: "",
    text: "Sherif is a proactive and tireless contributor who would make a great addition to any team. He completed his assignments on time and never failed to add a creative touch when appropriate.",
    colors: "bg-primary-100 text-light-on-background-900",
  },
  {
    name: "Alexander Petrovskiy",
    avatar: "",
    text: "Varya is a highly skilled professional designer and developer. Along with these qualities, she is a great leader, a team player, and a business partner! She is a valuable asset to any team when it comes to solving complex business problems! I'm glad to recommend her!",
    colors: "bg-primary-500 text-light-on-background-100",
  },
];

export default function Services() {
  return (
    <>
      <NextSeo
        title="Bridge-the-Gap team"
        description="Our services"
        keywords="Design systems, team design systems, build design system, design system consultant"
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Bridge-the-Gap.dev",
        }}
      />
      <Text
        as="h1"
        variant="6Xl"
        className="max-w-[950px] mx-auto mt-56 text-center animate-fadein animate-reveal"
      >
        Design system speeds building digital products and time to market
      </Text>
      <Text
        as="h2"
        variant="xl"
        className="max-w-4xl mx-auto mt-10 text-center animate-fadein animate-reveal"
      >
        A reusable components library enabling organization teams to build products efficiently.
      </Text>
      <CtaLink
        href="/hands-on-workshop"
        as={Link}
        underline
        className="flex justify-center w-full text-xl mt-28 animate-fadeindelay"
      >
        Start a conversation
      </CtaLink>
      <Text as="h2" variant="3xl" className="mt-32 mb-6 animate-fadein animate-reveal">
        Design System for teams and enterprises
      </Text>
      <Advantages colorSchema="dark" content={CONTENT} />
      <Text as="h2" variant="3xl" className="mt-32 animate-fadein animate-reveal">
        Design Sytem processes
      </Text>
      <div className="relative w-full h-54">
        <div className="flex items-baseline gap-[3%] mt-20">
          <Text as="p" variant="3xl" className="">
            Setup
          </Text>
          <ArrowIcon
            width="116"
            height="16"
            fill="currentColor"
            className="text-light-on-background-900"
            title="arrow"
          />
          <Text as="p" variant="3xl" className="">
            POC
          </Text>
          <ArrowIcon
            width="116"
            height="16"
            fill="currentColor"
            className="text-light-on-background-900"
            title="arrow"
          />
          <Text as="p" variant="3xl" className="">
            Outline
          </Text>
          <ArrowIcon
            width="116"
            height="16"
            fill="currentColor"
            className="text-light-on-background-900"
            title="arrow"
          />
          <Text as="p" variant="3xl" className="">
            Alignment
          </Text>
          <ArrowIcon
            width="116"
            height="16"
            fill="currentColor"
            className="text-light-on-background-900"
            title="arrow"
          />
        </div>
        <div className="flex items-baseline gap-[3%] mt-20 ml-24">
          <Text as="p" variant="3xl" className="">
            Handover
          </Text>
          <ArrowLeftIcon
            width="116"
            height="16"
            fill="currentColor"
            className="text-light-on-background-900"
            title="arrow"
          />
          <Text as="p" variant="3xl" className="">
            Adoption
          </Text>
          <ArrowLeftIcon
            width="116"
            height="16"
            fill="currentColor"
            className="text-light-on-background-900"
            title="arrow"
          />
          <Text as="p" variant="3xl" className="min-w-max">
            Components library
          </Text>
          <ArrowLeftIcon
            width="116"
            height="16"
            fill="currentColor"
            className="text-light-on-background-900"
            title="arrow"
          />
        </div>
      </div>
      <Text as="h2" variant="3xl" className="mt-32 mb-10 animate-fadein animate-reveal">
        How it works
      </Text>
      <Advantages colorSchema="light" content={HOW_IT_WORKS} />
      <Testimonial testimonials={testimonials} title={TestimonialTitle} />
      <Text as="h2" variant="3xl" className="mt-32 animate-fadein animate-reveal">
        Meet the team
      </Text>
      <div className="grid grid-cols-2 gap-10">
        <ProfileCard
          photoUrl={PhotoVaria}
          name="Varya Stepanova"
          role="Design systems architect and engineering manager"
          twitter="#"
          linkedin="#"
          github="#"
        />
        <ProfileCard
          photoUrl={PhotoIrina}
          name="Irina (Samoylova) Illustrova"
          role="Senior Frontend Engineer"
          twitter="#"
          linkedin="#"
          github="#"
        />
        <ProfileCard
          photoUrl={PhotoSherif}
          name="Sherif Saleh"
          role="Design manager"
          twitter="#"
          linkedin="#"
          github="#"
        />
        <ProfileCard
          photoUrl={PhotoAndriy}
          name="Andriy Kotko"
          role="Senior Frontend Engineer"
          twitter="#"
          linkedin="#"
          github="#"
        />
      </div>
    </>
  );
}
