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
  className?: string
  backgroundColorVar?: string
  backgroundColorVarDark?: string
  textColorVar?: string
  textColorVarDark?: string
  iconHoverColorVar?: string
  iconHoverColorVarDark?: string
  rounded?: boolean
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
  rounded = true,
  className,
  backgroundColorVar = '--btg-color-highlight-1000',
  backgroundColorVarDark = '--btg-color-highlight-400',
  textColorVar = '--btg-color-neutral-100',
  textColorVarDark = '--btg-color-neutral-1000',
  iconHoverColorVar = '--btg-color-neutral-300',
  iconHoverColorVarDark = '--btg-color-neutral-800',
}) => {
  return (
    <>
      <style>{`
:root {
  --btg-profile-card-background: var(${backgroundColorVar});
  --btg-profile-card-text: var(${textColorVar});
  --btg-profile-card-icon-hover: var(${iconHoverColorVar});
}

.dark-theme:root {
  --btg-profile-card-background: var(${backgroundColorVarDark});
  --btg-profile-card-text: var(${textColorVarDark});
  --btg-profile-card-icon-hover: var(${iconHoverColorVarDark});
}
@media (prefers-color-scheme: dark) {
  :root {
    --btg-profile-card-background: var(${backgroundColorVarDark});
    --btg-profile-card-text: var(${textColorVarDark});
    --btg-profile-card-icon-hover: var(${iconHoverColorVarDark});
  }
}
      `}</style>
      <div
        className={classNames(
          'flex min-w-min flex-col items-start justify-between gap-4 overflow-hidden bg-[var(--btg-profile-card-background)] px-4 text-[var(--btg-profile-card-text)] sm:px-0',
          {
            'rounded-lg': rounded,
            'py-4 sm:py-0': rounded,
            'py-0': !rounded,
            'sm:flex-row-reverse sm:pl-4 lg:pl-6': reverse,
            'sm:flex-row': !reverse,
          },
          styles['profile-card'],
          className
        )}
      >
        <img
          src={photoUrl}
          alt={name}
          className={classNames('max-w-[306px] object-contain', {
            'rounded-l-lg': rounded,
          })}
        />
        <div
          className={classNames('flex w-full flex-col justify-between lg:pl-6 lg:pr-10', {
            'xl:py-10': rounded,
            'sm:py-4': rounded,
          })}
        >
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
                <a
                  href={twitter}
                  className="!text-[var(--btg-profile-card-text)] hover:!text-[var(--btg-profile-card-icon-hover)]"
                >
                  <LogoTwitter size={32} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  className="!text-[var(--btg-profile-card-text)] hover:!text-[var(--btg-profile-card-icon-hover)]"
                >
                  <LogoLinkedin size={32} />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className="!text-[var(--btg-profile-card-text)] hover:!text-[var(--btg-profile-card-icon-hover)]"
                >
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
