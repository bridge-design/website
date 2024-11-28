'use client'

import React, { useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { CtaLink } from '../CtaLink/CtaLink'
import { Copy as CopyIcon } from '@carbon/icons-react'

/**
 * Contact Component for scheduling meetings and providing contact information.
 */
export const Contact: React.FC = () => {
  const [copyToClipboard, setCopyToClipboard] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mail@bridge-the-gap.dev')
    setCopyToClipboard('Copied!')
    setTimeout(() => setCopyToClipboard(''), 2000) // Clear copied state after 2 seconds
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mb-16 text-center text-xl">
        Book a 30-minute session with our design system architect Varya to discuss your project.
      </p>
      <InlineWidget
        styles={{ minWidth: '320px', height: '660px', width: '100%' }}
        url="https://calendly.com/var_ya/30min"
      />
      <p className="py-8 text-center text-xl">Or send an email with your request</p>
      <div className="flex items-center gap-5">
        <CtaLink to="mailto:mail@bridge-the-gap.dev" underline>
          mail@bridge-the-gap.dev
        </CtaLink>
        <CopyIcon
          width={20}
          height={20}
          className={`cursor-pointer text-[var(--btg-color-primary)] ${
            copyToClipboard ? 'text-gray-400' : 'hover:text-[var(--btg-color-primary-hover)]'
          }`}
          title={copyToClipboard || 'Copy email'}
          onClick={handleCopyEmail}
        />
      </div>
    </div>
  )
}

Contact.displayName = 'Contact'
