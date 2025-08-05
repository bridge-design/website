import { genPageMetadata } from 'app/seo'
import { CtaLink, HorizontalWave, Section } from '@/components-new/index'

export const metadata = genPageMetadata({
  title: 'Parts of Design System Exercise',
  description: `Interactive exercise to explore and understand different parts of a design system`,
})

const PartsOfDsPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section className="py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-center text-4xl">Parts of Design System Exercise</h1>
          <p className="text-xl">This exercise has been moved to our Design Systems Hub section.</p>
          <div className="mt-8">
            <CtaLink
              to="/hub/parts-of-design-system"
              className="text-xl"
              arrow="end"
              colorVar="var(--btg-hero-text-color)"
              colorHoverVar="var(--btg-hero-text-color)"
              borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
            >
              Go to the exercise
            </CtaLink>
          </div>
        </div>
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
