'use client'

import { Advantages, CtaLink, HelpTeams, Testimonial, Text } from '@bridge-the-gap/design-system'

import BreadCrumbsArrows from '@/components/BreadCrumbsArrows'
import Link from '@/components/Link'
import MeatTheTeam from '@/components/MeatTheTeam'

const CONTENT = [
  {
    icon: 'Rocket',
    title: 'Coherent',
    description: `
        Ensuring that your company's identity and the experience it provides for customers is consistent
        across the board for all of your digital products.
      `,
  },
  {
    icon: 'UserIdentification',
    title: '5× Faster',
    description:
      'Reusing the same design and development components and patterns from a design system library. allows all organizational teams to create, test, and launch products more quickly.',
  },
  {
    icon: 'TreeView',
    title: 'Scalability',
    description:
      'Maintain and scale your products more easily. The entire product line will be aligned, so each new release will work seamlessly with all previous versions and updates (and vice versa)',
  },
]

const HOW_IT_WORKS = [
  {
    icon: 'UserMultiple',
    title: 'Meet the team',
    description: 'Hiring an agency brings additional expertise and knowledge to your business',
  },
  {
    icon: 'Cursor_1',
    title: 'Workshop together',
    description: 'Hiring an agency brings additional expertise and knowledge to your business',
  },
  {
    icon: 'Network_3Reference',
    title: 'Regular alignement',
    description: 'Hiring an agency brings additional expertise and knowledge to your business',
  },
  {
    icon: 'CircleDash',
    title: 'Iterations',
    description: 'Hiring an agency brings additional expertise and knowledge to your business',
  },
  {
    icon: 'Task',
    title: 'Agile',
    description: 'Hiring an agency brings additional expertise and knowledge to your business',
  },
]

const TESTIMONIALS = [
  {
    name: 'Nico Peham - Tech Lead at pcode',
    avatar: '',
    text: 'Building a Design System 🛠️ Our members Marlene Höglinger and Nico Peham participated in the Hands-on with Design Systems workshop by Varya Stepanova and Sherif Saleh last week. It was about building design systems with Figma and React and gaining in-depth hands-on experience. It was especially exciting to see how other companies build their design systems and to exchange experiences.',
    colors: 'bg-primary-100 text-light-on-background-900',
  },
  {
    name: 'David Teissier - Directeur Général Publicom',
    avatar: '',
    text: 'Sherif was a true professional in his business. Great skills in web design and UX. CSS has no secrets for him also. We worked together on web projects to large sizes.',
    colors: 'bg-primary-500 text-light-on-background-100',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-light-background-50 text-light-on-background-100',
  },
  {
    name: 'Anthony Tahar - Webmarketing Master @ MEDISUR SAS',
    avatar: '',
    text: 'Sherif is a proactive and tireless contributor who would make a great addition to any team. He completed his assignments on time and never failed to add a creative touch when appropriate.',
    colors: 'bg-primary-100 text-light-on-background-900',
  },
  {
    name: 'Alexander Petrovskiy',
    avatar: '',
    text: `
        Varya is a highly skilled professional designer and developer. Along with these qualities,
        she is a great leader, a team player, and a business partner! She is a valuable asset to
        any team when it comes to solving complex business problems! I'm glad to recommend her!
      `,
    colors: 'bg-primary-500 text-light-on-background-100',
  },
]

const TestimonialTitle = (
  <Text variant="4xl" as="h2" className="mt-32">
    People Say
  </Text>
)

export default function Services() {
  return (
    <>
      <Text as="h1" variant="7Xl" className="animate-reveal mx-auto mt-56 text-center">
        Design system speeds building digital products and time to market
      </Text>
      <Text as="h2" variant="2XlMedium" className="animate-reveal mx-auto mt-10 text-center">
        A reusable components library enabling organization teams to build products efficiently.
      </Text>
      <CtaLink
        href="/contact"
        as={Link}
        // onClick={() => (window.location = "mailto:mail@bridge-the-gap.dev")}
        underline
        className="animate-fadein delay mt-28 flex w-full justify-center text-xl"
      >
        Start a conversation
      </CtaLink>
      <Text as="h2" variant="4xl" className="animate-reveal mb-6 mt-32">
        Design System for teams and enterprises
      </Text>
      <Advantages colorSchema="dark" content={CONTENT} />
      <Text as="h2" variant="4xl" className="mt-32">
        Design System processes
      </Text>
      <BreadCrumbsArrows />
      <Text as="h2" variant="4xl" className="b-10 mt-32">
        How it works
      </Text>
      <Advantages content={HOW_IT_WORKS} />
      <HelpTeams
        className="mt-24"
        photoUrl="/images/meet-the-team/rectangle_14.png"
        linkComponent={Link}
      />
      <Testimonial testimonials={TESTIMONIALS} title={TestimonialTitle} />
      <MeatTheTeam />
    </>
  )
}
