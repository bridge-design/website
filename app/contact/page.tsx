import { genPageMetadata } from 'app/seo'

import { Contact, HorizontalWave, Section } from '@/components-new/index'

export const metadata = genPageMetadata({
  title: 'Contact',
  description: `Get in touch with Bridge-the-Gap for expert design systems consulting
  and workshops. Connect with our team to discuss your project needs and benefit from the
  knowledge we share in bridging the gap between designers and developers.`,
})

const ContactPage = () => {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section className="py-12">
        <Contact />
      </Section>
    </>
  )
}

export default ContactPage
