import { getPostBySlug } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
export const dynamic = "force-static";
export default function BlogPage({ params }) {
  const { category, slug } = params;
  let post;

  try {
    post = getPostBySlug(category, slug);
  } catch (err) {
    return notFound();
  }

  return (
    <article className="prose dark:prose-invert mt-8 max-w-2xl mx-auto">
      <h1>{post.meta.title}</h1>
      <p className="text-gray-500">{post.meta.date}</p>
      <MDXRemote source={post.content} />
    </article>
  );
}
