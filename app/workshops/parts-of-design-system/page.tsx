import { genPageMetadata } from 'app/seo'

import { HorizontalWave, Section, DsPartsExercise } from '@/components-new/index'

export const metadata = genPageMetadata({
  title: 'Parts of Design System',
  description: ``,
})

const PartsOfDsPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section className="py-12">
        <DsPartsExercise />
      </Section>
    </>
  )
}

export default PartsOfDsPage

// 'use client'

// import { ThemeUIProvider } from 'theme-ui'

// import PartsExercise from '@/components/ds-parts'

// import theme from '../../../components/theme-ui-object/index'

// const PartsOfDesignSystem = () => {
//   return (
//     <ThemeUIProvider theme={theme}>
//       <PartsExercise />
//     </ThemeUIProvider>
//   )
// }

// export default PartsOfDesignSystem
