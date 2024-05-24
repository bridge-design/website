/* simplified version of this article: https://www.josephrex.me/frontmatter-with-nextjs-and-mdx/ */
const matter = require('gray-matter');

module.exports = () => async (tree, file) => {
  // Dynamically import stringify-object
  const { default: stringifyObject } = await import('stringify-object');

  const { data } = matter(file.contents);
  const { layout, ...props } = data;

  // Remove frontmatter after converting it into JS object
  if (tree.children[0].type === 'thematicBreak') {
    tree.children.shift(); // remove first element
    const firstHeadingIndex = tree.children.findIndex(
      (t) => t.type === 'thematicBreak' // find the closing break
    );
    if (firstHeadingIndex !== -1) {
      tree.children.splice(0, firstHeadingIndex + 1);
    }
  }

  // Insert JSX to pass frontmatter to parent component
  tree.children.unshift(
    {
      type: 'import',
      value: `
      import { ${layout} } from '@components/layout'
    `,
    },
    {
      type: 'jsx',
      value: `
    <${layout} {...${stringifyObject(props)}}>
    `,
    }
  );

  // Close JSX parent component
  tree.children.push({
    type: 'jsx',
    value: `
    </${layout}>
    `,
  });

  // Convert frontmatter to JS object and push to document tree
  tree.children.push({
    type: 'export',
    value: `
    export const meta = ${stringifyObject(props)}
    `,
  });
};
