import { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    docs: {
      description: {
        component: 'Bridge-the-gap best team displayed on these cards',
      },
    },
  },
  argTypes: {
    photoUrl: {
      control: 'text',
      description: 'URL of the profile photo',
    },
    name: {
      control: 'text',
      description: 'Name of the person',
    },
    role: {
      control: 'text',
      description: 'Role or position of the person',
    },
    description: {
      control: 'text',
      description: 'Optional description or bio of the person',
    },
    twitter: {
      control: 'text',
      description: 'Twitter profile link',
    },
    linkedin: {
      control: 'text',
      description: 'LinkedIn profile link',
    },
    github: {
      control: 'text',
      description: 'GitHub profile link',
    },
    reverse: {
      control: 'boolean',
      description: 'Reverse the layout of the card',
    },
  },
}

export default meta

type Story = StoryObj<typeof ProfileCard>

export const Default: Story = {
  args: {
    photoUrl: 'photo_6.png',
    name: 'Irina (Samoylova) Illustrova',
    role: 'Senior Frontend Engineer',
    twitter: '#',
    linkedin: '#',
    github: '#',
  },
}

export const Group: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-10">
      <ProfileCard
        photoUrl="photo_6.png"
        name="Varya Stepanova"
        role="Design systems architect and engineering manager"
        twitter="https://twitter.com/varya_en"
        linkedin="https://www.linkedin.com/in/varyastepanova/"
        github="https://github.com/varya"
      />
      <ProfileCard
        photoUrl="photo_6.png"
        name="Irina (Samoylova) Illustrova"
        role="Senior Frontend Engineer"
        twitter="https://twitter.com/illustrova"
        linkedin="https://www.linkedin.com/in/illustrova/"
        github="https://github.com/Illustrova"
      />
      <ProfileCard
        photoUrl="photo_6.png"
        name="Sherif Saleh"
        role="Design manager"
        twitter="#"
        linkedin="https://www.linkedin.com/in/salehsherif/"
        github="https://github.com/sherifsaleh"
      />
      <ProfileCard
        photoUrl="photo_6.png"
        name="Andriy Kotko"
        role="Senior Frontend Engineer"
        twitter="https://twitter.com/Kotkoa"
        linkedin="https://www.linkedin.com/in/kotkoa/"
        github="https://github.com/kotkoa"
      />
      <ProfileCard
        photoUrl="rectangle_64.jpg"
        name="Alexandra Stepanova"
        role="Senior Frontend Developer"
        twitter="#"
        linkedin="https://www.linkedin.com/in/alexandra-stepanova"
        github="https://github.com/alexandra-stepanova"
      />
    </div>
  ),
}

export const Column: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <ProfileCard
        photoUrl="photo_6.png"
        name="Varya Stepanova"
        role="Design systems architect and engineering manager"
        description="Design Systems Architect and Engineering Manager Varya has over 20 years of expertise in UI engineering and frontend development. A pioneer in the field, she started working with design systems even before the term was widely recognized. With a remarkable 9 years in consultancy, including 4 years as an independent consultant, Varya specializes in helping companies launch and enhance their design systems."
        twitter="https://twitter.com/varya_en"
        linkedin="https://www.linkedin.com/in/varyastepanova/"
        github="https://github.com/varya"
      />
      <ProfileCard
        photoUrl="photo_6.png"
        name="Irina (Samoylova) Illustrova"
        role="Senior Frontend Engineer"
        description="Sherif is a senior product designer. He crafts delightful experiences through data analytics, user research, prototypes, and validation. Sherif has extensive experience with design systems and years of working for financial services, banks, and automotive."
        twitter="https://twitter.com/illustrova"
        linkedin="https://www.linkedin.com/in/illustrova/"
        github="https://github.com/Illustrova"
        reverse
      />
      <ProfileCard
        photoUrl="photo_6.png"
        name="Sherif Saleh"
        role="Design manager"
        description="As an independent consultant, Varya helps companies to launch and boost their design systems. Her major focus is bridging the gap for designers, developers, and business specialists. That all is seasoned with extensive experience in component-driven UI development and a design degree."
        twitter="#"
        linkedin="https://www.linkedin.com/in/salehsherif/"
        github="https://github.com/sherifsaleh"
      />
      <ProfileCard
        photoUrl="photo_6.png"
        name="Andriy Kotko"
        role="UI Engineer"
        description="Andriy is a skilled UI Engineer with a strong focus on React and a talent for developing engaging, user-friendly websites. His expertise lies in converting Figma designs into dynamic React components and integrating frontends with backends using Apollo GraphQL, backed by his growing proficiency in TypeScript."
        twitter="https://twitter.com/Kotkoa"
        linkedin="https://www.linkedin.com/in/kotkoa/"
        github="https://github.com/kotkoa"
        reverse
      />
      <ProfileCard
        photoUrl="rectangle_64.jpg"
        name="Alexandra Urberg"
        role="UI Engineer"
        description="Alexandra is a detail-oriented UI Engineer, specializing in creating intuitive and user-friendly interfaces. Her skillset includes TypeScript, Storybook, Web Components, Lit, and React. Alexandra's passion for UI/UX design drives her to explore innovative ways to enhance user experience."
        linkedin="https://www.linkedin.com/in/alexandra-stepanova"
        github="https://github.com/alexandra-stepanova"
      />
    </div>
  ),
}
