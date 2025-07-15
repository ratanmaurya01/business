import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";

export const dynamic = "force-static";

export default function StockPage() {
  const posts = getAllPosts("stock");

  return (
    <div className="space-y-6 mt-6">
      <h1 className="text-3xl font-bold">Stock Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
            <Link
              href={`/blog/${post.category}/${post.slug}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
