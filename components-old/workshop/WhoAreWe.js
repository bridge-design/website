import { team } from '@/data/team'

import { People } from '@/components-old/People'
import SectionTitle from './SectionTitle'

export default function WhoAreWe() {
  const people = Object.values(team)
  return (
    <div className="mx-auto mt-28 max-w-4xl">
      <SectionTitle icon="Group32">Who We Are</SectionTitle>
      <People people={people.slice(0, 3)} />
    </div>
  )
}
