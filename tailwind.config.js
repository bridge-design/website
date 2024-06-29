const designSystem = require("@bridge-the-gap/design-system");
const bridgeConfig = designSystem.twconfig;
const { merge } = require("lodash");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/\\@bridge-the-gap/design-system/dist/**/*.js",
    "./node_modules/\\@bridge-the-gap/design-system/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Disable typography plugin for `pre`, `code `elements https://www.skcript.com/blog/disable-tailwind-prose-code/
      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: "var(--tw-prose-code)",
              backgroundColor: "#FFF",
              code: {
                color: "var(--tw-prose-code)",
              },
            },
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        reveal: {
          "0%": { transform: "translateY(25px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadein: "fadein 2s ease-out ",
        reveal: "reveal 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        fadeindelay: "fadein 2s 1s ease-out both",
      },
      borderRadius: {
        image: "3rem",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")],
};

let finalConfig = merge({}, bridgeConfig, config);

// Ensure that finalConfig.content.patterns is an array before adding to it
finalConfig.content.safelist = finalConfig.content.safelist || [];
finalConfig.content.safelist.push("bg-6XL");

module.exports = finalConfig;
