import { Text } from "@bridge-the-gap/design-system";
import Link from "@components/link";
import { NextSeo } from "next-seo";
import { getAllPosts } from "../../lib/api";
import React from 'react';

export default function Blog({ canonical, pageProps: { posts }}) {
  return (
    <>
      <NextSeo
        title="Bridge-the-Gap Blog"
        description="Sharing our knowledge on design systems with the world"
        keywords="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development"
        canonical={canonical}
        openGraph={{
          type: "website",
          locale: "en_US",
          site_name: "Bridge-the-Gap.dev",
        }}
      />
      {/***** HERO SECTION *****/}
      <div className="leading-normal tracking-normal text-light-on-background-900">
        <Text as="h1" variant="6Xl" className="max-w-3xl mx-auto mt-4">
          The knowlegde we share
        </Text>
        <div className="grid max-w-3xl grid-cols-1 gap-10 mx-auto mt-12">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              return (
                <div key={post.title}>
                  <hr />
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.title}
                    className="hover:text-primary-500"
                  >
                    <Text as="h3" variant="3Xl" className="mb-4">
                      {post.title}
                    </Text>
                    <Text as="p" variant="lg" className="mb-4">
                      {post.description}
                    </Text>
                    <span className="font-smBolder">Read more →</span>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}
