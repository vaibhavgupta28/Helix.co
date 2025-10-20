import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getCaseStudies } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Case Studies | Proven AdTech Performance",
  description:
    "Real-world results from our DSP, SSP, DMP, and MetaDSP implementations. See how we've helped clients scale.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <Hero
        title="Proof in Performance"
        subtitle="Real-world results from building and scaling AdTech platforms for enterprises, agencies, and startups."
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-hx-muted text-lg">
              Case studies are being prepared. Check back soon!
            </p>
          </div>
        )}
      </section>
    </>
  );
}
