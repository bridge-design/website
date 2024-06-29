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
