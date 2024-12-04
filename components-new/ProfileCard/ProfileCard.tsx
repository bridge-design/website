import React from 'react'
import { LogoTwitter, LogoLinkedin, LogoGithub } from '@carbon/icons-react'
import classNames from 'classnames'

import * as styles from './ProfileCard.module.css'

interface ProfileCardProps {
  photoUrl: string
  name: string
  role: string
  description?: string
  twitter?: string
  linkedin?: string
  github?: string
  reverse?: boolean
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  photoUrl,
  name,
  role,
  description,
  twitter,
  linkedin,
  github,
  reverse = false,
}) => {
  return (
    <>
      <style>{`
:root {
  --btg-profile-card-background: var(--btg-color-highlight-1000);
  --btg-profile-card-text: var(--btg-color-neutral-100);
  --btg-profile-card-icon-hover: var(--btg-color-neutral-300);
}

.dark-theme:root {
  --btg-profile-card-background: var(--btg-color-highlight-400);
  --btg-profile-card-text: var(--btg-color-neutral-1000);
  --btg-profile-card-icon-hover: var(--btg-color-neutral-800);
}
@media (prefers-color-scheme: dark) {
  :root {
    --btg-profile-card-background: var(--btg-color-highlight-400);
    --btg-profile-card-text: var(--btg-color-neutral-1000);
    --btg-profile-card-icon-hover: var(--btg-color-neutral-800);
  }
}
      `}</style>
      <div
        className={classNames(
          'flex min-w-min flex-col items-start justify-between gap-4 overflow-hidden rounded-lg bg-[var(--btg-profile-card-background)] px-4 py-4 text-[var(--btg-profile-card-text)] sm:px-0 sm:py-0',
          {
            'sm:flex-row-reverse sm:pl-4 lg:pl-6': reverse,
            'sm:flex-row': !reverse,
          },
          styles['profile-card']
        )}
      >
        <img src={photoUrl} alt={name} className="max-w-[306px] rounded-l-lg object-contain" />
        <div className="flex w-full flex-col justify-between sm:py-4 lg:pl-6 lg:pr-10 xl:py-10">
          <h3 className="tracking-wide mb-2 text-2xl font-medium leading-snug">{name}</h3>
          <p className="mb-6 text-base">{role}</p>
          <div className="flex flex-1 flex-col justify-between">
            {description && <p className="mb-2 flex-1 text-base">{description}</p>}
            <div
              className={classNames(
                'flex gap-4 justify-self-end',
                description ? 'justify-center lg:justify-start' : 'justify-start'
              )}
            >
              {twitter && (
                <a href={twitter} className="hover:text-[var(--btg-profile-card-icon-hover)]">
                  <LogoTwitter size={32} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} className="hover:text-[var(--btg-profile-card-icon-hover)]">
                  <LogoLinkedin size={32} />
                </a>
              )}
              {github && (
                <a href={github} className="hover:text-[var(--btg-profile-card-icon-hover)]">
                  <LogoGithub size={32} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
