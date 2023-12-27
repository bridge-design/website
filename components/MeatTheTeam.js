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
          role="Design Systems Architect and Engineering Manager"
          twitter="https://twitter.com/varya_en"
          linkedin="https://www.linkedin.com/in/varyastepanova/"
          github="https://github.com/varya"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/irina.png"
          name="Irina (Samoylova) Illustrova"
          role="Senior UI Engineer"
          twitter="https://twitter.com/illustrova"
          linkedin="https://www.linkedin.com/in/illustrova/"
          github="https://github.com/Illustrova"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/sherif.png"
          name="Sherif Saleh"
          role="Design Manager"
          twitter="#"
          linkedin="https://www.linkedin.com/in/salehsherif/"
          github="https://github.com/sherifsaleh"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/andriy.png"
          name="Andriy Kotko"
          role="UI Engineer"
          twitter="https://twitter.com/Kotkoa"
          linkedin="https://www.linkedin.com/in/kotkoa/"
          github="https://github.com/kotkoa"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/alexandra.jpg"
          name="Alexandra Urberg"
          role="UI Engineer"
          twitter="#"
          linkedin="https://www.linkedin.com/in/alexandra-stepanova"
          github="https://github.com/alexandra-stepanova"
        />
      </div>
    </>
  );
}
