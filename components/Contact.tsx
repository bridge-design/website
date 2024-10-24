'use client'

import { useState } from 'react'
import { InlineWidget } from 'react-calendly'

import { CtaLink, Text } from '@bridge-the-gap/design-system'

import Link from '@/components/Link'

import CopyText from '../public/copy-doc.svg'

export default function Contact() {
  const [copyToClipboard, setCopyToClipboard] = useState('')
  return (
    <>
      <Text className="mt-16 text-center">
        Book a 30-minute session with our design system architect Varya to discuss your project.
      </Text>
      <InlineWidget
        styles={{ minWidth: '320px', height: '660px' }}
        url="https://calendly.com/var_ya/30min"
      />
      <Text className="py-8 text-center">Or send an email with your request</Text>
      <div className="flex items-center justify-center gap-5 text-center">
        <CtaLink href="mailto:mail@bridge-the-gap.dev" as={Link} underline>
          mail@bridge-the-gap.dev
        </CtaLink>
        <CopyText
          width="20"
          height="20"
          fill="currentColor"
          className={`mb-3 cursor-pointer text-primary-700 hover:text-primary-400 ${
            copyToClipboard ? 'text-gray-400 hover:text-gray-400' : ''
          }`}
          title="CopyText"
          onClick={() => {
            navigator.clipboard.writeText('mail@bridge-the-gap.dev')
            setCopyToClipboard('Copied!')
          }}
        />
      </div>
    </>
  )
}
