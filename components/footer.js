import Link from "@components/link";

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="flex items-center justify-center w-full py-10 mt-8 border-t border-gray-300">
        ©{"\u00A0"}
        <Link href="/" className="inline-block hover:text-primary-500">
          <a
            href="https://bridge-the-gap.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:no-underline "
          >
            Bridge the gap
          </a>
        </Link>
        {"\u00A0"}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
