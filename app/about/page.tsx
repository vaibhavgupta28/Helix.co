import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatBar } from "@/components/StatBar";
import { CTABand } from "@/components/CTABand";
import { Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Helix | Ten Years Building AdTech",
  description:
    "From boutique AdOps to global AdTech builder. 100+ experts, $2B+ managed spend, 100+ products delivered.",
};

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "100+", label: "Team Members" },
  { value: "$2B+", label: "Managed Spend" },
  { value: "100+", label: "Products Delivered" },
];

const leadership = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "15+ years building AdTech platforms. Former VP Engineering at [Major DSP].",
  },
  {
    name: "Sarah Martinez",
    role: "CTO & Co-Founder",
    bio: "Led data engineering teams at scale. PhD in Machine Learning.",
  },
  {
    name: "Michael Park",
    role: "VP of Product",
    bio: "Product leader with deep programmatic expertise. Ex-Google, Ex-AppNexus.",
  },
  {
    name: "Emily Watson",
    role: "VP of Engineering",
    bio: "Infrastructure architect. Built systems handling 100B+ daily requests.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Ten Years of Building What Others Still Talk About"
        subtitle="From boutique AdOps to global AdTech builder, we've spent a decade solving the hardest challenges in advertising technology."
      />

      <StatBar stats={stats} />

      {/* Mission */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Mission"
            subtitle="Engineer the backbone of intelligent advertising"
            centered
            className="mb-8 flex flex-col items-center"
          />
          <p className="text-lg text-hx-muted text-center">
            We exist to build the platforms, systems, and infrastructure that power modern
            advertising. From real-time bidding to AI-driven optimization, we create the
            technology that moves markets.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-hx-surface border-y border-hx-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Story"
              centered
              className="mb-8 flex flex-col items-center"
            />
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-hx-muted mb-6">
                What started as a small team solving AdOps problems for a handful of clients
                has evolved into a global builder of advertising technology platforms. We've
                always believed that the best solutions come from deep technical expertise
                combined with real-world operational knowledge.
              </p>
              <p className="text-lg text-hx-muted mb-6">
                Over the past decade, we've designed, built, and scaled over 100 AdTech
                products — from DSPs processing billions of daily impressions to MetaDSP
                systems managing hundreds of millions in media spend. Our platforms have
                handled petabyte-scale data, served ads across 20+ global markets, and
                powered campaigns for the world's most demanding advertisers.
              </p>
              <p className="text-lg text-hx-muted">
                Today, we're recognized as the partner of choice for enterprises, agencies,
                and startups that need AdTech built right — fast, flexible, and ready to
                scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="How We Work"
            centered
            className="mb-12 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                AI + Human Synergy
              </h3>
              <p className="text-hx-muted">
                We combine proprietary AI with deep domain expertise to solve complex
                problems faster and better.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Speed Over Complexity
              </h3>
              <p className="text-hx-muted">
                We build what matters, ship fast, and iterate based on real-world feedback.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Results Over Noise
              </h3>
              <p className="text-hx-muted">
                We focus on outcomes that matter: performance, reliability, and measurable
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-hx-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership Team"
            subtitle="Experts who've built AdTech at the world's largest companies"
            centered
            className="mb-12 md:mb-16 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="p-6 bg-hx-surface border border-hx-border rounded-2xl text-center"
              >
                <div className="w-20 h-20 rounded-full bg-hx-accent/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-hx-accent">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-hx-text mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-hx-accent mb-3">{person.role}</p>
                <p className="text-sm text-hx-muted mb-4">{person.bio}</p>
                <a
                  href={`https://linkedin.com/in/${person.name.toLowerCase().replace(" ", "-")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-hx-muted hover:text-hx-accent transition-colors"
                  aria-label={`${person.name} on LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Join Us in Building the Future"
        subtitle="We're always looking for exceptional talent"
        primaryCTA={{ text: "View Careers", href: "/careers" }}
        secondaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
