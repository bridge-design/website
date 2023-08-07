import Link from "@components/link";

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="flex items-center justify-center w-full py-10 mt-8 border-t border-gray-300">
        ©{"\u00A0"}
        <Link href="/" className="inline-block hover:text-primary-500 font-bold" rel="noopener noreferrer">
            Bridge the gap
        </Link>
        {"\u00A0"}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
}
