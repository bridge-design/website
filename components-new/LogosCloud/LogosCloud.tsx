import React from 'react'
import * as styles from './LogosCloud.module.css'

interface Logo {
  src: string
  alt: string
  link: string
}

interface LogosCloudProps {
  logos: Logo[]
}

export const LogosCloud: React.FC<LogosCloudProps> = ({ logos }) => {
  return (
    <div className={`${styles.container} relative overflow-hidden`}>
      <div className={`${styles.scroller} flex gap-12`}>
        {logos.map((logo, index) => (
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
              className="h-16 w-auto max-w-none object-cover lg:h-24"
              style={{ minWidth: '120px' }}
            />
          </a>
        ))}
        {/* Repeat the logos for seamless scrolling */}
        {logos.map((logo, index) => (
          <a
            href={logo.link}
            key={`duplicate-${index}`}
            className="block transition-opacity hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto max-w-none object-cover lg:h-24"
              style={{ minWidth: '120px' }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
