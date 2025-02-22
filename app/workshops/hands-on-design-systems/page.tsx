import { genPageMetadata } from 'app/seo'

import { HorizontalWave, Section, DsPartsExercise } from '@/components-new/index'

export const metadata = genPageMetadata({
  title: 'Parts of Design System',
  description: ``,
})

const HandsOnDesignSystemsPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      Hello world
    </>
  )
}

export default HandsOnDesignSystemsPage
