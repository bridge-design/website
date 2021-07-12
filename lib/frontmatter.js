/* simplified version of this article: https://www.josephrex.me/frontmatter-with-nextjs-and-mdx/ */
const matter = require("gray-matter");
const stringifyObject = require("stringify-object");

module.exports = () => (tree, file) => {
  const { data } = matter(file.contents);
  const { layout, ...props } = data;
  console.log(
    "🚀 ~ file: frontmatter.js ~ line 8 ~ layout, ...props",
    layout,
    props
  );

  console.log(
    "🚀 ~ file: frontmatter.js ~ line 16 ~ tree.children",
    tree.children
  );

  // Step 2: Remove frontmatter after converting it into JS object
  if (tree.children[0].type === "thematicBreak") {
    tree.children.shift(); // remove first element
    const firstHeadingIndex = tree.children.findIndex(
      (t) => t.type === "thematicBreak" // find the closing break
    );
    if (firstHeadingIndex !== -1) {
      tree.children.splice(0, firstHeadingIndex + 1);
    }
  }

  console.log(
    "🚀 ~ file: frontmatter.js ~ line 27 ~ tree.children",
    tree.children
  );

  // Step 3: Insert JSX to pass frontmatter to parent component
  tree.children.unshift(
    {
      type: "import",
      value: `
      import { ${layout} } from '@components/layout'
    `,
    },
    {
      type: "jsx",
      value: `
    <${layout} {...${stringifyObject(props)}}>

    `,
    }
  );

  // // Step 4: Close JSX parent component
  tree.children.push({
    type: "jsx",
    value: `

    </${layout}>
    `,
  });

  // Step 1: Convert frontmatter to JS object and push to document tree
  tree.children.push({
    type: "export",
    value: `
    export const meta = ${stringifyObject(props)}
    `,
  });

  console.log(
    "🚀 ~ file: frontmatter.js ~ line 27 ~ tree.children",
    tree.children
  );
  console.log(
    "🚀 ~ file: frontmatter.js ~ line 1 ~ stringifyObject(props)",
    stringifyObject(props)
  );
};
