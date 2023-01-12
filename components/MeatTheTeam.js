import React from "react";
import { Text, ProfileCard } from "@bridge-the-gap/design-system";

export default function MeatTheTeam() {
  return (
    <>
      <Text as="h2" variant="3xl" className="mt-32 animate-fadein animate-reveal">
        Meet the team
      </Text>
      <div className="grid grid-cols-2 gap-10">
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_60.png"
          name="Varya Stepanova"
          role="Design systems architect and engineering manager"
          twitter="#"
          linkedin="#"
          github="#"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_61.png"
          name="Irina (Samoylova) Illustrova"
          role="Senior Frontend Engineer"
          twitter="#"
          linkedin="#"
          github="#"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_62.png"
          name="Sherif Saleh"
          role="Design manager"
          twitter="#"
          linkedin="#"
          github="#"
        />
        <ProfileCard
          photoUrl="/images/meet-the-team/rectangle_63.png"
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
