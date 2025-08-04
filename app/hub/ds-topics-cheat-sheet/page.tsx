import { genPageMetadata } from 'app/seo'
import { HorizontalWave, Section } from '@/components-new/index'
import CheatSheet from './components/CheatSheet'

export const metadata = genPageMetadata({
  title: 'Design Systems Topics Cheat Sheet',
  description: `Quick reference guide for design systems topics and concepts`,
})

const DsTopicsCheatSheetPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section className="py-12">
        <CheatSheet />
      </Section>
    </>
  )
}

export default DsTopicsCheatSheetPage 