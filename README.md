# Bridge-the-Gap Website

## Available scripts

- `yarn dev` - starts development server.
- `yarn build` - creates production build.
<!-- - `yarn export` - exports static files to `/out` directory.
- `yarn export:hands-on-workshop` - creates static export for `hands-on-workshop.goright.io`. -->
- `yarn export` - deprecated at next@14 and higher. Use `yarn build` instead.
- `yarn deploy` - deploys previously exported static assets. Normally should not be needed, because deploy is handled via Github Actions.

## Adding new articles to blog.

Add a new directory named as the desired slug for the post, into `src/pages/blog` directory. Create `index.mdx` inside that directory and add your content. Any images or other assets can be also stored in the folder.
`index.mdx` can contain frontmatter, which will be used for rendering the page. Frontmatter is written in `yaml` syntax, and always separated with `---` at the beginning and the end. See an example with comments:

```yaml
---
title: My Post # article title to be displayed. 
date: 2021-01-26 # date is used for sorting posts, therefore highly desired
layout: LayoutBlog # layout for rendering page. Defaults to LayoutBlog.
seo:
  title: Seo title # this title is used for metadata. If it's omitted, main title will ve used.
  desc: > # this symbol can be used for long metadata which starts from next line
    What do UX designers and UI developers value in each other? This research study on
    LinkedIn data analyses recommendation texts and bridges the results to the existing
    scientific and industry knowledge.
  # ...other meta here
---
```

All metadata can be added under `seo` section and need to match [NextSeo Options](https://github.com/garmeeh/next-seo#nextseo-options). Some metadata (e.g. cover image) will be taken from defaults if not provided.

## Deploy

Deployment is handled by Github Actions workflow, which is triggered on push into `main` bran


This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
