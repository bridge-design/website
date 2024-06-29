"use client";
import { Logo, Nav } from "@bridge-the-gap/design-system";
import Link from "@/components/link";

export default function Header({ navItems }) {
  return (
    <header className="flex items-center w-full pt-11">
      <Link href="/">
        <Logo className="max-w-[250px] mr-auto" />
      </Link>
      <Nav items={navItems} className="ml-auto" linkComponent={Link} />
    </header>
  );
}
