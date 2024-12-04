import React from 'react'
import * as styles from './LogosCloud.module.css'

interface Logo {
  src: string | undefined
  alt: string
  link: string
}

interface LogosCloudProps {
  logos: Logo[]
}

export const LogosCloud: React.FC<LogosCloudProps> = ({ logos }) => {
  const validLogos = logos.filter((logo): logo is Logo & { src: string } => !!logo.src)

  return (
    <div className={`${styles.container} relative overflow-hidden`}>
      <div className={`${styles.scroller} flex gap-12`}>
        {validLogos.map((logo, index) => (
          <a
            href={logo.link}
            key={index}
            className="block transition-opacity hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto max-w-none object-cover lg:h-24 dark:invert dark:filter"
            />
          </a>
        ))}
        {/* Repeat the logos for seamless scrolling */}
        {validLogos.map((logo, index) => (
          <a
            href={logo.link}
            key={`duplicate-${index}`}
            className="block transition-opacity hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            233
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 w-auto max-w-none object-cover lg:h-24 dark:invert dark:filter"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
