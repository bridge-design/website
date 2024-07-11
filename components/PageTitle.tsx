import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl text-3xl text-gray-900 dark:text-gray-100 md:leading-14">
      {children}
    </h1>
  )
}
