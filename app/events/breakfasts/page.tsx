import { HorizontalWave, Section, Outro, CtaLink } from '@/components-new/index'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Design Systems Breakfast',
  description: `Casual morning gatherings for design system professionals to network, learn, and exchange experiences over coffee`,
  keywords: `design systems breakfast, networking, meetup, design systems community`,
})

export default async function BreakfastsPage() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <div className="mx-auto max-w-[80ch]">
          <CtaLink
            to="/events"
            arrow="start"
            className="text-xl"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
          >
            Back to all events
          </CtaLink>
        </div>
        <article className="grow">
          <h1 className="mb-16 text-center font-5xl text-5xl">Casual Design Systems Breakfast</h1>
          
          <div className="prose mx-auto my-12 text-justify dark:prose-invert">
            <p className="text-xl leading-relaxed">
              Looking for a casual way to connect with design system people (both designers and engineers!), 
              learn cutting-edge ideas, and network over coffee?
            </p>
            
            <p className="text-xl leading-relaxed">
              Enter <strong>Design Systems Breakfast!</strong> This is a relaxed morning gathering where you can 
              discuss early-stage topics, exchange experiences, and build connections in a friendly setting. 
              It's like catching up with colleagues over breakfast, but with fresh insights on design systems.
            </p>
            
            <p>
              It started during COVID when everything went digital but we missed the friendly atmosphere of 
              in-person gatherings. While there were (and still are) many online meetups, many felt too formal 
              and structured. That's why we created something different.
            </p>
            
            <p>
              COVID has passed, but the design system community is now worldwide, so this event keeps living. 
              Here's what makes it special:
            </p>
            
            <ul className="text-lg space-y-3">
              <li><strong>🍳 It's breakfast time</strong></li>
              <li>
                <strong>☕ It's casual</strong> (People actually eat and drink coffee during the session! 
                Join us with your breakfast. Or without, as you wish :-)
              </li>
              <li>
                <strong>💬 We focus on networking and exchanging experiences while learning.</strong> This means 
                a lot of discussion.
              </li>
              <li>
                <strong>🚀 It's often early-stage content</strong> (Topics that aren't YET at conferences, 
                because people bring ideas for early feedback. You can learn them first!)
              </li>
              <li><strong>🙀 We don't record</strong> (That's a feature)</li>
            </ul>
          </div>
        </article>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-pink)">
        <div className="text-center">
          <h2 className="mx-auto mb-10 font-4xl text-4xl lg:w-4/5">
            Want to speak at Design Systems Breakfast?
          </h2>
          <p className="mx-auto mb-10 text-xl lg:w-3/4">
            Share your insights about design systems, frontend development, UI design and team
            collaboration at our casual morning meetups.{' '}
            <CtaLink
              to="/contact"
              underline={true}
              className="text-xl"
              colorVar="var(--btg-hero-text-color)"
              colorHoverVar="var(--btg-hero-text-color)"
              borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
            >
              Contact Varya
            </CtaLink>{' '}
            to discuss your talk idea.
          </p>
        </div>
      </Outro>
    </>
  )
}
