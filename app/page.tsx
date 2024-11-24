import { Hero, CtaLink } from '@/components-new/index.tsx'

export default async function Page() {
  return (
    <>
      <Hero backgroundColor="var(--btg-hero-background-teal)">
        <div className="text-center lg:mt-8">
          <h1 className="font-6xl mx-auto mb-16 text-4xl leading-hero lg:w-4/5 lg:text-6xl">
            We team up with designers and developers to build and scale design systems
          </h1>
          <CtaLink
            to="/contact"
            underline={true}
            className="text-xl"
            borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
          >
            Start a conversation
          </CtaLink>
        </div>
      </Hero>
    </>
  )
}
