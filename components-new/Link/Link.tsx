import React, { AnchorHTMLAttributes } from 'react'
import { default as NextLink } from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, NextLinkProps {
  href: string
}

export const Link: React.FC<LinkProps> = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <NextLink href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default Link
