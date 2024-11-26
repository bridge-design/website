import { Meta, StoryObj } from '@storybook/react'

import { BlogList } from '../components-new/BlogList/BlogList'
import { CtaLink } from '../components-new/CtaLink/CtaLink'
import { Header } from '../components-new/Header/Header'
import { HorizontalWave } from '../components-new/HorizontalWave/HorizontalWave'
import { Footer } from '../components-new/Footer/Footer'
import { Pagination } from '../components-new/Pagination/Pagination'
import { ScrollTopAndComment } from '../components-new/ScrollTopAndComment/ScrollTopAndComment'
import { Section } from '../components-new/Section/Section'

const meta: Meta = {
  title: 'Templates/Blog',
  component: () => null,
  tags: ['autodocs', 'dev', 'draft'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const blogPosts = [
  {
    path: 'post-1',
    date: '2023-10-01',
    title: 'Tracking Design System Adoption — Where Do We Get the Data From?',
    description: `Explore the transformative journey from task-focused metrics to goal-oriented strategies
    in design systems. Learn how shifting from output
    to outcome can align design systems with broader organizational objectives. Discover various
    methods to track design system adoption, including surveys, 3rd-party tools, injected scripts,
    and GitHub searches. Understand their pros and cons, and how they contribute to a dynamic,
    user-focused design system evolution.`,
    content: `In "Impact Players," Liz Wiseman uses a specific example of a department responsible for training employees to
illustrate her point about the difference between task completion and goal aiming. Initially, this department
measured its success based on the quantity of training sessions provided, a classic example of focusing on
task completion. They diligently counted the number of training programs delivered, essentially ticking off
a checklist of activities. However, this metric didn't resonate with upper management. The reports generated
by the department, which focused on these quantitative measures, failed to capture the interest or attention of
senior leaders. This situation is a classic example of how focusing solely on task completion can lead to a
disconnect with organizational goals and fail to demonstrate real impact.`,
  },
  {
    path: 'post-2',
    date: '2023-11-01',
    title: 'React Performance Tips',
    description: 'Learn how to optimize React applications for better performance.',
  },
]

export default meta

type Story = StoryObj<typeof meta>

const navigationItems = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Default: Story = {
  render: () => (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-teal); }`}</style>
      <Header navigationItems={navigationItems} />
      <HorizontalWave color="var(--btg-hero-background-teal)" />
      <Section>
        <h1 className="font-5xl mb-16 text-center text-5xl">The klowledge we share</h1>
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:px-10 lg:py-11">
          <BlogList posts={blogPosts} />
          <Pagination currentPage={2} totalPages={10} />
        </div>
      </Section>
      <Footer siteTitle="Bridge-The-Gap - design systems consulting and workshops" />
    </>
  ),
}

export const APost = () => (
  <>
    <style>{`:root { --btg-hero-background: var(--btg-hero-background-teal); }`}</style>
    <Header navigationItems={navigationItems} />
    <HorizontalWave color="var(--btg-hero-background-teal)" />
    <ScrollTopAndComment />
    <Section>
      <CtaLink to="/case-studies" arrow="start" className="text-xl">
        Back to all case studies
      </CtaLink>
      <article className="grow">
        <h1 className="font-5xl mb-16 text-center text-5xl">{blogPosts[0].title}</h1>
        <div className="prose mx-auto my-12 text-justify dark:prose-invert">
          <div className="my-8 text-justify dark:prose-invert md:mx-auto">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="not-prose text-base font-medium leading-6 text-gray-500 dark:text-white">
                  <time dateTime={blogPosts[0].date}>
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', postDateTemplate)}
                  </time>
                </dd>
              </div>
            </dl>
          </div>
          {blogPosts[0].content}
        </div>
      </article>
    </Section>
    <Footer siteTitle="Bridge-The-Gap - design systems consulting and workshops" />
  </>
)
