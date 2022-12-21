import { useState } from "react";
import Link from "@components/link";
import { Nav, Button, Logo } from "@bridge-the-gap/design-system";
import { useRouter } from "next/router";
import { Text, CtaLink } from "@bridge-the-gap/design-system";
import localTime from "@components/local-time";

export default function Header({ navItems }) {
  const { asPath } = useRouter();

  return (
    <header className="flex items-center w-full pt-14">
      <Link href="/">
        <Logo className="max-w-[250px] mr-auto" />
      </Link>
      <Nav
        items={navItems}
        linkComponent={Link}
        className="ml-auto max-w-min"
        currentPath={asPath}
      />
    </header>
  );
}
