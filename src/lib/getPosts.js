import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export function getAllPosts(category) {
  const dir = path.join(POSTS_DIR, category);
  const files = fs.readdirSync(dir);

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      category,
      slug: data.slug || filename.replace(".mdx", ""),
    };
  });
}

export function getPostBySlug(category, slug) {
  const filePath = path.join(POSTS_DIR, category, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    meta: data,
    content,
  };
}
