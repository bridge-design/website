type Role = 'designer' | 'developer'

interface HandoutBlock {
  title: string
  slug: string
  roles: Role[]
  day: number
  url?: string
}

export const handoutBlocks: HandoutBlock[] = [
  {
    title: 'Workshop flow',
    slug: 'workshop-flow',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    title: 'Introducion',
    slug: 'introducion',
    roles: ['designer', 'developer'],
    day: 1,
    url: 'https://miro.com/app/board/uXjVOf0JQik=/',
  },
  {
    title: 'Making a toast',
    slug: 'toast',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    title: 'Figma setup',
    slug: 'figma-setup',
    roles: ['designer'],
    day: 1,
  },
  {
    title: 'Repository setup',
    slug: 'repo-setup',
    roles: ['developer'],
    day: 1,
  },
  {
    title: 'UI inventory',
    slug: 'ui-inventory',
    roles: ['developer', 'designer'],
    day: 1,
  },
  {
    title: 'Design tokens',
    slug: 'design-tokens',
    roles: ['designer'],
    day: 1,
  },
  {
    title: 'Coding practice',
    slug: 'coding-practice',
    roles: ['developer'],
    day: 1,
  },
  {
    title: 'Preparing to release',
    slug: 'preparing-release',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'New challenge',
    slug: 're-design',
    roles: ['designer'],
    day: 2,
  },
  {
    title: 'Releasing the library',
    slug: 'releasing-library',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Product update',
    slug: 'product-update',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Cast in code',
    slug: 'cast-in-code',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Product release',
    slug: 'product-release',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Automatic syncronizations',
    slug: 'autosync',
    roles: ['developer'],
    day: 2,
  },
  {
    title: 'Feedback Form',
    slug: 'feedback',
    url: 'https://forms.gle/rR2teKjU5LjAcnXz6',
    roles: ['designer', 'developer'],
    day: 2,
  },
]
