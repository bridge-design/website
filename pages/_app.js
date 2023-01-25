import Head from "next/head";
import { LayoutDefault, LayoutWorkshop } from "@components/layout";
import "@bridge-the-gap/design-system/dist/styles.css";
import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";
import path from "path";
import { getThumbnailPath } from "lib/api";

function MyApp({ Component, baseUrl, canonical, thumb, ...pageProps }) {
  const LayoutComponent = canonical ? LayoutWorkshop : LayoutDefault;
  return (
    <LayoutComponent>
      <DefaultSeo
        title="Bridge-The-Gap - design systems consulting and workshops"
        description="We team up with designers and developers to build and scale design systems"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        canonical={canonical}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: baseUrl,
          site_name: "Bridge-the-Gap.dev",
          images: thumb &&
            baseUrl && [
              {
                url: baseUrl + "/images" + thumb,
                width: 1000,
                height: 750,
                alt: "Bridge-the-Gap — build and scale design systems",
              },
            ],
        }}
        twitter={{
          // handle: '@handle',
          // site: '@goright.io',
          cardType: "summary_large_image",
        }}
      />
      <Component canonical={canonical} baseUrl={baseUrl} {...pageProps} />
    </LayoutComponent>
  );
}

MyApp.getInitialProps = async ({ ctx: { pathname, req } }) => {
  if (req) {
    const exportedSubpath = process.env.GORIGHT_EXPORT;
    const BASE_URL = (() => {
      if (process.env.NODE_ENV === "development") return "http://localhost:3000";
      return process.env.BASEPATH ? process.env.BASEPATH : "https://bridge-the-gap.dev";
    })();
    const thumb = getThumbnailPath(pathname);

    let pageProps = { baseUrl: BASE_URL, thumb: thumb };
    if (!exportedSubpath) return pageProps;

    return { ...pageProps, canonical: BASE_URL + pathname };
  }
  return {};
};

export default MyApp;
