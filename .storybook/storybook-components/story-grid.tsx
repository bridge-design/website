import React, { useContext, useMemo } from 'react'
import { Story, useOf, DocsContext, Heading } from '@storybook/blocks'
import type { PreparedStory, ModuleExports } from '@storybook/types'
interface StoryGridProps {
  of?: ModuleExports
  includePrimary?: boolean
}

interface Background {
  name: string
  value: string
}

export const StoryGrid = ({ of }: StoryGridProps) => {
  const { componentStories } = useContext(DocsContext)
  const { story } = useOf<'story'>(of ?? 'story')
  const columns = story.parameters?.storyGridColumns ?? 3
  const backgroundOptions: Record<string, string> = useMemo(() => {
    const backgrounds: Background[] = story.parameters?.backgrounds.values
    return backgrounds.reduce(
      (backgroundMap, background) => {
        backgroundMap[background.name] = background.value
        return backgroundMap
      },
      {} as Record<string, string>
    )
  }, [story.parameters?.backgrounds.values])

  // Filter stories that are not disabled and not excluded from grid view
  const stories = componentStories().filter((story) => {
    return !story.parameters?.docs?.disable && !story.parameters?.docs?.excludeFromStoryGrid
  })
  // Do not show grid if component has only one story
  if (!stories || stories.length <= 1) {
    return null
  }

  const columnsClass = useMemo(() => {
    /**
     * tailwind compiler doesn't support dynamic classes, so each of w-1/x styles has to be in the file as a string
     * https://tailwindcss.com/docs/content-configuration#dynamic-class-names
     */
    if (columns === 2) {
      return 'w-1/2'
    } else if (columns === 3) {
      return 'w-1/3'
    } else if (columns === 4) {
      return 'w-1/4'
    } else if (columns === 5) {
      return 'w-1/5'
    } else if (columns >= 6) {
      return 'w-1/6'
    }
  }, [columns])

  return (
    <>
      <Heading>Variants</Heading>
      <div className="flex flex-wrap m-b m-b-xs" style={{ minHeight: 400 }}>
        {stories.map((story: PreparedStory) => {
          const background = story.parameters?.backgrounds?.default
          const backgroundHex = backgroundOptions[background]
          const storyName = story.name === 'Playground' ? 'Default' : story.name
          return (
            <div
              className={`align-center flex flex-col px-1 ${columnsClass}`}
              key={story.name}
              style={{ background: backgroundHex ?? 'transparent', position: 'relative' }}
            >
              <p className="m-b-sm text-secondary">{storyName}</p>
              <Story of={story.moduleExport} />
            </div>
          )
        })}
      </div>
    </>
  )
}
