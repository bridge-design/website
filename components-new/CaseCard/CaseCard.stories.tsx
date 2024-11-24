import { Meta, StoryObj } from '@storybook/react'
import { CaseCard } from './CaseCard'

const meta: Meta<typeof CaseCard> = {
  title: 'Components/CaseCard',
  component: CaseCard,
  argTypes: {
    casePost: {
      control: 'object',
      description: 'Data for the case study, including title, description, slug, and logo.',
    },
  },
}

export default meta

type Story = StoryObj<typeof CaseCard>

export const Default: Story = {
  args: {
    casePost: {
      slug: 'example-case',
      title: 'Example Case Study',
      description: 'This is a description for the example case study.',
      logo: {
        src: 'https://via.placeholder.com/140',
        alt: 'Example Logo',
      },
    },
  },
}

export const WithoutDescription: Story = {
  args: {
    casePost: {
      slug: 'example-case-no-description',
      title: 'Example Case Without Description',
      logo: {
        src: 'https://via.placeholder.com/140',
        alt: 'Example Logo',
      },
    },
  },
}

export const WithoutLogo: Story = {
  args: {
    casePost: {
      slug: 'example-case-no-logo',
      title: 'Example Case Without Logo',
      description: 'This is a description for a case study without a logo.',
    },
  },
}

export const ManyCases = () => (
  <>
    <CaseCard
      casePost={{
        slug: 'example-case-1',
        title: 'Example Case Study 1',
        description: 'This is a description for example case study 1.',
        logo: {
          src: 'https://via.placeholder.com/140',
          alt: 'Example Logo 1',
        },
      }}
    />
    <CaseCard
      casePost={{
        slug: 'example-case-2',
        title: 'Example Case Study 2',
        description: 'This is a description for example case study 2.',
        logo: {
          src: 'https://via.placeholder.com/140',
          alt: 'Example Logo 2',
        },
      }}
    />
    <CaseCard
      casePost={{
        slug: 'example-case-3',
        title: 'Example Case Study 3',
        description: 'This is a description for example case study 3.',
        logo: {
          src: 'https://via.placeholder.com/140',
          alt: 'Example Logo 3',
        },
      }}
    />
  </>
)
