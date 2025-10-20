import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudy, getCaseStudies } from "@/lib/mdx";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/CTABand";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.challenge,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="bg-hx-surface border-b border-hx-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hx-text mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-hx-muted mb-6">
              {caseStudy.client} • {caseStudy.industry}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Results Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-heading font-bold text-hx-text mb-4">
                The Challenge
              </h2>
              <p className="text-hx-muted leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-hx-text mb-4">
                Key Results
              </h2>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-hx-accent mt-1 flex-shrink-0">✓</span>
                    <span className="text-hx-muted">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote source={caseStudy.content} />
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Achieve Similar Results?"
        subtitle="Let's discuss how we can help your business"
        primaryCTA={{ text: "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ text: "View All Case Studies", href: "/case-studies" }}
      />
    </>
  );
}
