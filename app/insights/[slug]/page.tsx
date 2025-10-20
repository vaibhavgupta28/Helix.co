import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/CTABand";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="bg-hx-surface border-b border-hx-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hx-text mb-6">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-sm text-hx-muted">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.date), "MMMM dd, yyyy")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      <CTABand
        title="Want to Learn More?"
        subtitle="Explore our services and see how we can help"
        primaryCTA={{ text: "View Our Services", href: "/services" }}
        secondaryCTA={{ text: "Read More Insights", href: "/insights" }}
      />
    </>
  );
}
