import React from 'react'
import { useOf } from '@storybook/blocks'

export const ComponentLinks = () => {
  const resolvedOf = useOf<'component'>('component')

  const getDescriptionFromResolvedOf = (resolvedOf: ReturnType<typeof useOf>): string | null => {
    switch (resolvedOf.type) {
      case 'story': {
        return resolvedOf.story.parameters['docs']?.description?.story || null
      }
      case 'meta': {
        const { parameters, component } = resolvedOf.preparedMeta
        const metaDescription = parameters['docs']?.description?.component
        if (metaDescription) {
          return metaDescription
        }
        return (
          parameters['docs']?.extractComponentDescription?.(component, {
            component,
            parameters,
          }) || null
        )
      }
      case 'component': {
        const {
          component,
          projectAnnotations: { parameters },
        } = resolvedOf
        return (
          parameters?.['docs']?.extractComponentDescription?.(component, {
            component,
            parameters,
          }) || null
        )
      }
      default: {
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${
            (resolvedOf as ReturnType<typeof useOf>).type
          }`
        )
      }
    }
  }

  const markdown = getDescriptionFromResolvedOf(resolvedOf)

  const extractLinks = (markdownText: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g
    let matches

    const basicLinks = [
      {
        title: 'Figma Design',
        href: '#',
        disabled: true,
      },
      {
        title: 'Github',
        href: 'javascript:void(0)',
        disabled: true,
      },
    ]

    const commonGuidLinesLink = {
      title: 'Guidelines',
      href: '#',
      disabled: true,
    }

    const links: { title: string; href: string; disabled?: boolean }[] = []

    while ((matches = regex.exec(markdownText)) !== null) {
      links.push({ title: matches[1], href: matches[2] })
    }

    if (links.length < 1) {
      // Add the common guidelines link to the end of the array
      return basicLinks.concat(commonGuidLinesLink)
    }

    return links.concat(commonGuidLinesLink)
  }

  const linkContainerClasses = 'sb-unstyled flex gap-2 items-center mb-4'
  const linkClasses = 'sb-unstyled text-[var(--btg-color-highlight-300)] underline text-xs'
  const linkDisabled = 'sb-unstyled text-[var(--btg-color-neutral-600)] pointer-events-none text-xs'
  const dividerClasses = 'w-px h-4 bg-[var(--btg-color-highlight-300)]'

  const arrayOfLinks = extractLinks(markdown ?? '')

  return (
    <div className={linkContainerClasses}>
      {arrayOfLinks.map((link, index) => (
        <React.Fragment key={index}>
          <a
            href={link?.disabled ? 'javascript:void(0)' : link.href}
            className={link?.disabled ? linkDisabled : linkClasses}
          >
            {link.title}
          </a>
          {/* Render the VerticalDivider only if it's not the last item */}
          {index < arrayOfLinks.length - 1 && <div className={dividerClasses} />}
        </React.Fragment>
      ))}
    </div>
  )
}
