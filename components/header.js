import { useState } from "react";
import Link from "@components/link";
import { Nav, Button, Logo } from "@bridge-the-gap/design-system";
import { useRouter } from "next/router";
import { Text, CtaLink } from "@bridge-the-gap/design-system"
import localTime from "@components/local-time"


export default function Header({ navItems }) {
  const { asPath } = useRouter();

  return (
    <>
      <div className="bg-yellow-100">
        <div className="container">
          <div className="flex flex-col items-baseline justify-between py-3 md:flex-row">
            {/* <Link
              href="/hands-on-workshop"
              className="inline-block underline hover:text-primary-500"
            >
              <Text variant="lg" className="font-smBolder">
                Upcoming workshop: 2{"\u00A0"}&{"\u00A0"}3{"\u00A0"}December{" "}
                {localTime(9, 13)}
              </Text>
            </Link> */}
            {/* <CtaLink
              as="a"
              className="md:ml-8 text-light-on-background-50 whitespace-nowrap"
              target="_blank"
              rel="noopener"
              href="https://www.eventbrite.ch/e/hands-on-with-design-systems-december-tickets-185528118597"
            >
              Tickets are available
            </CtaLink> */}
          </div>
        </div>
      </div>
      <div className="container">
        <header className="relative flex items-center w-full pt-8">
          <Link href="/">
            <Logo className="mr-auto w-36" />
          </Link>
          <Nav
            items={navItems}
            linkComponent={Link}
            className="w-5/12 ml-auto md:mx-auto"
            currentPath={asPath}
          />
          <Button
            className="hidden md:block"
            size="small"
            label="Let's&nbsp;talk&nbsp; ↗"
            as="a"
            href="mailto:hello@goright.io"
            target="_blank"
            rel="noopener"
          />
        </header>
      </div>
    </>
  )
}
