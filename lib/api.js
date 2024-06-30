import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "app/blog");
const casesDirectory = path.join(process.cwd(), "app/case-studies");

export function getPostSlugs() {
  let postSlugs = [];
  fs.readdirSync(postsDirectory).forEach((file) => {
    const currDirectoryPath = path.join(postsDirectory, file);
    if (fs.existsSync(currDirectoryPath) && fs.lstatSync(currDirectoryPath).isDirectory()) {
      postSlugs.push(path.basename(currDirectoryPath));
    }
  });
  return postSlugs;
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, slug, "page.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { date, ...data },
    content,
  } = matter(fileContents);
  return { date: date, slug: realSlug, content, ...data };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      return post1.date > post2.date ? -1 : 1;
    })
    // we need to keep dates for sorting, but then transform to strings to make serializable (to be accepted into getStaticProps)
    .map((post) => ({ ...post, date: post.date.toString() }));
  return posts;
}

export function getCasesBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(casesDirectory, slug, "page.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { date, ...data },
    content,
  } = matter(fileContents);
  return { date: date, slug: realSlug, content, ...data };
}

export function getCasesSlugs() {
  let casesSlugs = [];
  fs.readdirSync(casesDirectory).forEach((file) => {
    const currDirectoryPath = path.join(casesDirectory, file);
    if (fs.existsSync(currDirectoryPath) && fs.lstatSync(currDirectoryPath).isDirectory()) {
      casesSlugs.push(path.basename(currDirectoryPath));
    }
  });
  return casesSlugs;
}

export function getAllCases() {
  const slugs = getCasesSlugs();
  const cases = slugs
    .map((slug) => getCasesBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      return post1.date > post2.date ? -1 : 1;
    })
    // we need to keep dates for sorting, but then transform to strings to make serializable (to be accepted into getStaticProps)
    .map((post) => ({ ...post, date: post.date.toString() }));
  return cases;
}

export function getThumbnailPath(slug) {
  const srcPath = "pages" + slug;
  if (!fs) return;
  if (!fs.existsSync(srcPath)) {
    console.log("directory doesn't exist: ", srcPath);
    return null;
  }
  const thumb = fs.readdirSync(srcPath).find((filename) => filename.startsWith("thumb."));
  return thumb ? slug + "/" + thumb : null;
}
