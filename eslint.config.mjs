import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  js.configs.recommended,
  {
    files: ["*.js", "*.jsx"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      createDefaultProgram: true,
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^react"],
            ["^\\u0000"],
            ["^@mui", "mui-color"],
            ["^@?\\w"],
            ["@/(.*)"],
            ["^[./]"],
            ["^\\."],
            ["^.+\\.css$", "^classnames$"],
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
      "react/jsx-key": "error",
      "no-unused-expressions": ["warn", { allowShortCircuit: true, allowTernary: true }],
      "no-unused-vars": "warn",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "public/**",
      "build/**",
      "*.mdx",
      "eslint.config.mjs",
      "next.config.mjs",
      "postcss.config.js",
      "tailwind.config.js",
      "tsconfig.json",
    ],
  },
];
