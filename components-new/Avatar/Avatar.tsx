import React from 'react'

interface AvatarProps {
  member: {
    photoUrl: string
    name: string
    role?: string
  }
}

export const Avatar: React.FC<AvatarProps> = ({ member }) => {
  return (
    <div className="group relative -mr-4 mb-8 flex flex-col items-center">
      <div className="border-1 h-12 w-12 overflow-hidden rounded-full border-[var(--btg-color-neutral-300)] transition-transform duration-200 group-hover:scale-105">
        <img
          src={member.photoUrl}
          title={member.name}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="invisible absolute -bottom-12 text-center text-xs transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
        {member.name}
      </p>
    </div>
  )
}
