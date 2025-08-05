import { genPageMetadata } from 'app/seo'
import { CtaLink, HorizontalWave, Outro, Section } from '@/components-new/index'
import CheatSheet from './components/CheatSheet'

export const metadata = genPageMetadata({
  title: 'Design Systems Topics Cheat Sheet',
  description: `Quick reference guide for design systems topics and concepts`,
  image: '/hub/ds-topics-cheat-sheet/thumb.png',
})

const DsTopicsCheatSheetPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-teal); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <CheatSheet />
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-teal)">
        <div className="text-center">
          <h2 className="mx-auto mb-10 font-4xl text-4xl lg:w-4/5">
            Ready to put these concepts into practice?
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
            <CtaLink
              to="/case-studies"
              className="text-xl"
              arrow="end"
              colorVar="var(--btg-hero-text-color)"
              colorHoverVar="var(--btg-hero-text-color)"
              borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
            >
              Explore our case studies
            </CtaLink>
            <CtaLink
              to="/contact"
              underline={true}
              className="text-xl"
              colorVar="var(--btg-hero-text-color)"
              colorHoverVar="var(--btg-hero-text-color)"
              borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
            >
              Start a conversation
            </CtaLink>
          </div>
        </div>
      </Outro>
    </>
  )
}

export default DsTopicsCheatSheetPage
