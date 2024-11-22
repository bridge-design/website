import React from 'react'

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
    <div className="flex flex-wrap justify-center gap-12">
      {logos.map((logo, index) => (
        <a
          href={logo.link}
          key={index}
          className="block transition-opacity hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo.src} alt={logo.alt} className="h-16 w-auto lg:h-24" />
        </a>
      ))}
    </div>
  )
}
