import { genPageMetadata } from 'app/seo'
import { HorizontalWave, Section } from '@/components-new/index'
import PartsExercise from './components/PartsExercise'

export const metadata = genPageMetadata({
  title: 'Parts of Design System Exercise',
  description: `Interactive exercise to explore and understand different parts of a design system`,
})

const PartsOfDsPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-teal); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section className="py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-center text-4xl">Parts of Design System Exercise</h1>
          <h3 className="animate-reveal mx-auto mt-10 text-center font-2xl text-2xl">
            Explore and understand different parts of a design system through this interactive
            exercise.
          </h3>
        </div>
        <PartsExercise />
      </Section>
    </>
  )
}

export default PartsOfDsPage
