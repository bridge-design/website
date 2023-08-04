const designSystem = require("@bridge-the-gap/design-system");
const bridgeConfig = designSystem.twconfig;
const { merge } = require("lodash");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/\\@bridge-the-gap/design-system/dist/**/*.js",
    "./node_modules/\\@bridge-the-gap/design-system/dist/*.js",
  ],
  theme: {
    extend: {
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
  plugins: [require("@tailwindcss/aspect-ratio")],
};

let finalConfig = merge({}, bridgeConfig, config);

// Ensure that finalConfig.content.patterns is an array before adding to it
finalConfig.content.safelist = finalConfig.content.safelist || [];
finalConfig.content.safelist.push("bg-6XL");

module.exports = finalConfig;
