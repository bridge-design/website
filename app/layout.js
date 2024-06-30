"use client";
import { useEffect } from "react";
import ReactGA from "react-ga";
import Script from "next/script";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const GA_TRACKING_ID = "UA-185519437-1";
const OPT_CONTAINER_ID = "OPT-KRWKXQN";

import Footer from "../components/footer";
import Header from "../components/header";
import { navItemsCommon, navItemsWorkshop } from "./helpers";

import "./globals.css";
import "@bridge-the-gap/design-system/dist/styles.css";

const inter = Inter({ subsets: ["latin"] });

function trackPageView() {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return;
  }
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize(GA_TRACKING_ID);
    window.GA_INITIALIZED = true;
  }
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isWorkshops = pathname.includes("/workshops");

  const navItems = isWorkshops ? navItemsWorkshop : navItemsCommon;
  const mainClass = isWorkshops
    ? "flex-1 px-4 py-6 mx-auto lg:container md:px-6 md:py-12 text-light-on-background-900"
    : "max-w-full text-light-on-background-900";
  const contentWrapperClass = isWorkshops ? "max-w-5xl p-10 mx-auto" : "";

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Bridge-the-Gap</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#131313" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#d9d9d9" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#D9D9D9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#131313" media="(prefers-color-scheme: dark)" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <Script src={`https://www.googleoptimize.com/optimize.js?id=${OPT_CONTAINER_ID}`}></Script>
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
