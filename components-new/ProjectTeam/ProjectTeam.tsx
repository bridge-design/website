import React from 'react'
import { Avatar } from '../Avatar/Avatar'
import { team as teamData } from '@/data/team'

interface ProjectTeamProps {
  team: string[]
}

export const ProjectTeam: React.FC<ProjectTeamProps> = ({ team }) => {
  return (
    <div className="flex w-full justify-center gap-4">
      {team.map((id) => {
        const member = teamData[id]
        if (!member) return null
        return <Avatar member={member} />
      })}
    </div>
  )
}
