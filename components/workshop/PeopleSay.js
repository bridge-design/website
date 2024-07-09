'use client'

import { Testimonial } from '@bridge-the-gap/design-system'

import SectionTitle from './SectionTitle'

const testimonials = [
  {
    name: 'Nico Peham - Tech Lead at pcode',
    text: ' Building a Design System 🛠️ Our members Marlene Höglinger and Nico Peham participated in the Hands-on with Design Systems workshop by Varya Stepanova and Sherif Saleh last week. It was about building design systems with Figma and React and gaining in-depth hands-on experience. It was especially exciting to see how other companies build their design systems and to exchange experiences.',
    colors: 'bg-primary-50 text-light-on-background-900',
  },
  {
    name: 'David Teissier - Directeur Général Publicom',
    text: 'Sherif was a true professional in his business. Great skills in web design and UX. CSS has no secrets for him also. We worked together on web projects to large sizes.',
    colors: 'bg-primary-500 text-light-on-background-100',
  },
  {
    name: 'Junaid Rasheed',
    // avatar: '/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-light-background-50 text-light-on-background-100',
  },
  {
    name: 'Anthony Tahar - Webmarketing Master @ MEDISUR SAS',
    // avatar: '/rasheed_avatar.png',
    text: 'Sherif is a proactive and tireless contributor who would make a great addition to any team. He completed his assignments on time and never failed to add a creative touch when appropriate.',
    colors: 'bg-primary-50 text-light-on-background-900',
  },
  {
    name: 'Alexander Petrovskiy',
    text: `Varya is a highly skilled professional designer and developer. Along with these qualities, she is a great leader, a team player, and a business partner! She is a valuable asset to any team when it comes to solving complex business problems! I'm glad to recommend her!`,
    colors: 'bg-primary-500 text-light-on-background-100',
  },
]

const sectionHeading = <SectionTitle icon="Forum32">People Say</SectionTitle>

export default function PeopleSay() {
  return (
    <div className="relative mx-auto mt-28 max-w-4xl overflow-x-visible">
      <Testimonial title={sectionHeading} testimonials={testimonials} />
    </div>
  )
}
