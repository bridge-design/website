import React from "react";
import Link from "@components/link";
import { Logo, Nav } from "@bridge-the-gap/design-system";

export default function Header({ navItems }) {
  return (
    <header className="flex items-center w-full">
      <Link href="/">
        <Logo className="max-w-[250px] mr-auto" />
      </Link>
      <Nav items={navItems} className="ml-auto" linkComponent={Link} />
    </header>
  );
}
