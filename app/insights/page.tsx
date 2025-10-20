import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Insights | AdTech Intelligence & Thought Leadership",
  description:
    "Expert insights on AdTech, programmatic advertising, AI in media buying, and the future of advertising technology.",
};

export default async function InsightsPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Hero
        title="AdTech Intelligence. Delivered."
        subtitle="Expert insights on programmatic advertising, AI, data privacy, and the technologies shaping the future of media."
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-hx-muted text-lg">
              Insights are being prepared. Check back soon!
            </p>
          </div>
        )}
      </section>
    </>
  );
}
