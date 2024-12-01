import Link from '@/components-old/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-8 flex w-full items-center justify-center border-t border-gray-300 py-10">
        <div>{`© ${new Date().getFullYear()} `}</div>
        {'\u00A0'}
        <Link
          href="/"
          className="hover:text-primary-500 inline-block font-bold"
          rel="noopener noreferrer"
        >
          {siteMetadata.title}
        </Link>
      </div>
    </footer>
  )
}
