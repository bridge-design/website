import { genPageMetadata } from 'app/seo'

import Contact from '@/components/Contact'

export const metadata = genPageMetadata({
  title: 'Contact',
  description: `Get in touch with Bridge-the-Gap for expert design systems consulting
  and workshops. Connect with our team to discuss your project needs and benefit from the
  knowledge we share in bridging the gap between designers and developers.`,
})

const ContactPage = () => {
  return <Contact />
}

export default ContactPage
