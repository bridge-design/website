'use client'

import { ProfileCard, Text } from '@bridge-the-gap/design-system'
import { team } from '@/data/team'

export default function MeatTheTeam() {
  return (
    <>
      <Text as="h2" variant="4xl" className="animate-reveal mt-32">
        Meet the team
      </Text>
      <div className="mt-10 flex flex-wrap justify-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-col xl:grid xl:grid-cols-2">
        {Object.values(team).map((member) => (
          <ProfileCard
            key={member.name}
            photoUrl={member.photoUrl}
            name={member.name}
            role={member.role}
            twitter={member.twitter}
            linkedin={member.linkedin}
            github={member.github}
          />
        ))}
      </div>
    </>
  )
}
