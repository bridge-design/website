const path = require("path");
const frontmatterPlugin = require("./lib/frontmatter");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatterPlugin],
  },
});
const exportPath = process.env.GORIGHT_EXPORT;

module.exports = withMDX({
  webpack: (config, { isServer }) => {
    // @see: https://github.com/vercel/next.js/issues/9866#issuecomment-881799911
    if (!isServer) {
      config.resolve.fallback = Object.assign(config.resolve.fallback, {
        fs: false,
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // replace images with NextImage and require statement in mdx files
    // @source: https://dev.to/jokeneversoke/adding-relative-img-paths-to-mdx-59l4
    let rule = config.module.rules.find((rule) => String(rule.test) === String(/\.mdx?$/));

    rule.use.push({ loader: path.resolve(__dirname, "lib/mdxLoader.js") });

    if (isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: "**/thumb.{png,jpg,jpeg,gif}",
              context: path.resolve(__dirname, "pages"),
              to: path.join(__dirname, "public", "images"),
              noErrorOnMissing: true,
            },
          ],
        })
      );
    }

    return config;
  },
  exportPathMap: (defaultPathMap) => {
    const resultMap = {
      "/handout/v2/releasing-library": {
        page: "/hands-on-workshop/handout/v2/releasing-library",
        query: { canonical: true },
      },
    };

    if (exportPath && defaultPathMap.hasOwnProperty(exportPath)) {
      // Corrected condition
      Object.keys(defaultPathMap).forEach((path) => {
        if (path.startsWith(exportPath)) {
          const newPath =
            path.length === exportPath.length ? "/" : path.substring(exportPath.length);
          resultMap[newPath] = Object.assign(defaultPathMap[path], {
            query: { canonical: true },
          });
        }
      });
      return resultMap;
    }
    return defaultPathMap;
  },
  basePath: process.env.BASEPATH ? process.env.BASEPATH : "",
  assetPrefix: process.env.BASEPATH ? process.env.BASEPATH + "/" : "",

  pageExtensions: ["js", "jsx", "mdx"],
  trailingSlash: true,
  // workaround, see: https://github.com/vercel/next.js/issues/21079
  images: {
    loader: "imgix",
    // Provide a default value for images.path
    path: process.env.BASEPATH ? process.env.BASEPATH + "/" : "",
  },
});
