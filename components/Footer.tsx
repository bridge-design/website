import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center w-full py-10 mt-8 border-t border-gray-300">
        <div>{`© ${new Date().getFullYear()} `}</div>
        {"\u00A0"}
        <Link href="/" className="inline-block hover:text-primary-500 font-bold" rel="noopener noreferrer">
          {siteMetadata.title}
        </Link>
      </div>
    </footer>
  )
}
