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
              className="flex flex-col w-1/3 px-1 align-center"
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
