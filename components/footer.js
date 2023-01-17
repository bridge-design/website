import Link from "@components/link";

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      <div className="flex items-center justify-center w-full py-10 border-t border-gray-300">
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
        {"\u00A0"}2022
      </div>
    </footer>
  );
}
