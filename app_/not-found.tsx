import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="font-extrabold leading-9 tracking-tight md:text-8xl text-6xl text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="font-bold leading-normal md:text-2xl mb-4 text-xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link
          href="/"
          className="focus:shadow-outline-blue font-medium leading-5 inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
