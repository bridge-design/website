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
    title: 'Feedback Form',
    slug: 'feedback',
    url: 'https://forms.gle/rR2teKjU5LjAcnXz6',
    roles: ['designer', 'developer'],
    day: 2,
  },
]
