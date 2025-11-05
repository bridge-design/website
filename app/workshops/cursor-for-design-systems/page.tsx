import { genPageMetadata } from 'app/seo'
import { HorizontalWave, Section } from '@/components-new/index'

export const metadata = genPageMetadata({
  title: 'Cursor for Design Systems',
  description: `TODO`,
})

const CursorForDesignSystemsPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section className="py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-center text-4xl">Cursor for Design Systems</h1>
          <p className="text-xl">Content coming soon...</p>
        </div>
      </Section>
    </>
  )
}

export default CursorForDesignSystemsPage
