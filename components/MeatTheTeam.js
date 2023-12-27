import React from "react";
import { Text, ProfileCard } from "@bridge-the-gap/design-system";

export default function MeatTheTeam() {
  return (
    <>
      <Text
        as="h2"
        variant="4xl"
        className="mt-32 animate-fadein animate-reveal"
      >
        Meet the team
      </Text>
      <div className="flex flex-wrap justify-center gap-10 mt-10 xl:grid xl:grid-cols-2 lg:flex lg:flex-col md:grid md:grid-cols-2">
        <ProfileCard
          photoUrl="/images/meet-the-team/varya.png"
          name="Varya Stepanova"
          role="Design systems architect and engineering manager"
          twitter="https://twitter.com/varya_en"
          linkedin="https://www.linkedin.com/in/varyastepanova/"
          github="https://github.com/varya"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/ririna.png"
          name="Irina (Samoylova) Illustrova"
          role="Senior Frontend Engineer"
          twitter="https://twitter.com/illustrova"
          linkedin="https://www.linkedin.com/in/illustrova/"
          github="https://github.com/Illustrova"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/sherif.png"
          name="Sherif Saleh"
          role="Design manager"
          twitter="#"
          linkedin="https://www.linkedin.com/in/salehsherif/"
          github="https://github.com/sherifsaleh"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/andriy.png"
          name="Andriy Kotko"
          role="Senior Frontend Engineer"
          twitter="https://twitter.com/Kotkoa"
          linkedin="https://www.linkedin.com/in/kotkoa/"
          github="https://github.com/kotkoa"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/alexandra.jpg"
          name="Alexandra Stepanova"
          role="Middle Frontend Developer"
          twitter="#"
          linkedin="https://www.linkedin.com/in/alexandra-stepanova"
          github="https://github.com/alexandra-stepanova"
        />
      </div>
    </>
  );
}
