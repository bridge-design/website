"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import Footer from "../components/footer";
import Header from "../components/header";
import { navItemsCommon, navItemsWorkshop } from "./helpers";

import "./globals.css";
import "@bridge-the-gap/design-system/dist/styles.css";
import "tailwindcss/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bridge-The-Gap - design systems consulting and workshops",
  description: "We team up with designers and developers to build and scale design systems",
  keywords:
    "design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development",
  canonical: "https://bridge-the-gap.dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bridge-the-gap.dev",
    site_name: "Bridge-the-Gap.dev",
    images: [
      {
        url: "https://bridge-the-gap.dev/images/thumb.png",
        width: 1000,
        height: 750,
        alt: "Bridge-the-Gap — build and scale design systems",
        type: "image/png",
      },
    ],
  },
  twitter: {
    // handle: '@handle',
    // site: '@goright.io',
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isWorkshops = pathname.includes("/workshops");

  const navItems = isWorkshops ? navItemsWorkshop : navItemsCommon;
  const mainClass = isWorkshops
    ? "flex-1 px-4 py-6 mx-auto lg:container md:px-6 md:py-12 text-light-on-background-900"
    : "max-w-full text-light-on-background-900";
  const contentWrapperClass = isWorkshops ? "max-w-5xl p-10 mx-auto" : "";

  return (
    <html lang="en">
      <head>
        <title>Bridge-the-Gap</title>
        <meta name="msapplication-TileColor" content="#d9d9d9" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#D9D9D9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#131313" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className}>
        <div className="container flex flex-col min-h-screen overflow-hidden justify-between">
          <Header navItems={navItems} />
          <main className={mainClass}>
            {isWorkshops ? <div className={contentWrapperClass}>{children}</div> : children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
