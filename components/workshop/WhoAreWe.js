import { team } from '@/data/team'

import { People } from '@/components/People'
import SectionTitle from './SectionTitle'

export default function WhoAreWe() {
  const people = Object.values(team)
  return (
    <div className="x-auto mt-28 max-w-4xl">
      <SectionTitle icon="Group32">Who We Are</SectionTitle>
      <People people={people.slice(0, 3)} />
    </div>
  )
}
