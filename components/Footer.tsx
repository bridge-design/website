import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-8 flex w-full items-center justify-center border-t border-gray-300 py-10">
        <div>{`© ${new Date().getFullYear()} `}</div>
        {'\u00A0'}
        <Link
          href="/"
          className="font-bold inline-block hover:text-primary-500"
          rel="noopener noreferrer"
        >
          {siteMetadata.title}
        </Link>
      </div>
    </footer>
  )
}
