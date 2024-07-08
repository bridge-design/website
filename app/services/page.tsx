import { genPageMetadata } from 'app/seo'

import Services from '@/components/Services'

export const metadata = genPageMetadata({
  title: 'Design Systems Services',
  description: `Discover our expert design system services at Bridge-the-Gap. We offer
  scalable, efficient solutions for cohesive digital product development. Benefit from the
  knowledge we share to streamline your project and ensure consistent brand identity.`,
  keywords: `design system services, digital product development, efficient design systems,
  brand identity, design system consulting, design system workshops, digital product scalability,
  expert design systems`
})

const ServicesPage = () => {
  return <Services />
}

export default ServicesPage
