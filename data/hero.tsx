export interface HeroData {
  title: string
  headingPrefix: string
  rotatingTexts: string[]
  cta: {
    text: string
    url: string
  }
}

export const heroData: HeroData = {
  title: 'Welcome to Our Platform',
  headingPrefix: 'We team up with designers and developers',
  rotatingTexts: [
    'to build and scale design systems',
    'to enable AI-native design and development',
    'to champion AI tools for faster design-to-production'
  ],
  cta: {
    text: 'Start a conversation',
    url: '/contact'
  }
}
