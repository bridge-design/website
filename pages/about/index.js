import { people, People } from "@components/People";
import { ProfileCard } from "@bridge-the-gap/design-system";
import { NextSeo } from "next-seo";

export default function About() {
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
      <div className="flex flex-col gap-10 mt-10">
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_60.png"
          name="Varya Stepanova"
          role="Design systems architect and engineering manager"
          twitter="https://twitter.com/varya_en"
          linkedin="https://www.linkedin.com/in/varyastepanova/"
          github="https://github.com/varya"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_61.png"
          name="Irina (Samoylova) Illustrova"
          role="Senior Frontend Engineer"
          twitter="https://twitter.com/illustrova"
          linkedin="https://www.linkedin.com/in/illustrova/"
          github="https://github.com/Illustrova"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_62.png"
          name="Sherif Saleh"
          role="Design manager"
          twitter="#"
          linkedin="https://www.linkedin.com/in/salehsherif/"
          github="https://github.com/sherifsaleh"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_63.png"
          name="Andriy Kotko"
          role="Senior Frontend Engineer"
          twitter="https://twitter.com/Kotkoa"
          linkedin="https://www.linkedin.com/in/kotkoa/"
          github="https://github.com/kotkoa"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_64.jpg"
          name="Alexandra Stepanova"
          role="Senior Frontend Developer"
          twitter="#"
          linkedin="https://www.linkedin.com/in/alexandra-stepanova"
          github="https://github.com/alexandra-stepanova"
        />
      </div>
    </>
  );
}
