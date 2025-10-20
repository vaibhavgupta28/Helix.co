import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/CTABand";
import { Lightbulb, Rocket, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Startup Studio | Build AdTech Ventures with Helix",
  description:
    "We don't just build platforms — we build businesses. Co-invest, build, and accelerate your AdTech idea to market.",
};

const offerings = [
  {
    icon: Lightbulb,
    title: "Concept Validation & Prototyping",
    description:
      "Validate your idea with rapid prototyping, market research, and technical feasibility assessments.",
  },
  {
    icon: Rocket,
    title: "Market Readiness & GTM",
    description:
      "Develop go-to-market strategies, positioning, and launch plans to ensure your product finds its audience.",
  },
  {
    icon: TrendingUp,
    title: "Tech & Funding Partnership",
    description:
      "We co-invest and provide technical expertise, reducing your upfront costs and accelerating time to market.",
  },
  {
    icon: Users,
    title: "Team Hiring & Operations Setup",
    description:
      "Build your core team with our hiring support and operational playbooks to scale efficiently.",
  },
];

export default function StudioPage() {
  return (
    <>
      <Hero
        title="We Don't Just Build Platforms — We Build Businesses"
        subtitle="Our Startup Studio turns AdTech ideas into scalable ventures. We co-invest, build, and accelerate your vision to market."
        primaryCTA={{ text: "Launch with Our Studio", href: "/contact" }}
      />

      {/* Intro */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-hx-muted leading-relaxed">
            If you have a vision for the next generation of AdTech but need a partner to
            bring it to life, we're here. Our Studio model combines capital, technical
            expertise, and operational support to help you launch, scale, and succeed.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-hx-surface border-y border-hx-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Offer"
            subtitle="End-to-end support for AdTech entrepreneurs"
            centered
            className="mb-12 md:mb-16 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="p-8 bg-hx-bg border border-hx-border rounded-2xl hover:border-hx-accent/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <offering.icon
                    className="w-12 h-12 text-hx-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-hx-text mb-3">
                  {offering.title}
                </h3>
                <p className="text-hx-muted leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Why Partner with Helix Studio?"
            centered
            className="mb-12 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Deep Domain Expertise
              </h3>
              <p className="text-hx-muted">
                We've built over 100 AdTech products across DSPs, SSPs, DMPs, and more. We
                know what works and what doesn't.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Capital & Resources
              </h3>
              <p className="text-hx-muted">
                We co-invest and provide technical resources, reducing your upfront costs
                and risk.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Speed to Market
              </h3>
              <p className="text-hx-muted">
                Our proven processes and reusable frameworks let you launch in months, not
                years.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Network & Support
              </h3>
              <p className="text-hx-muted">
                Access our network of investors, partners, and advisors to accelerate your
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-hx-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            centered
            className="mb-12 flex flex-col items-center"
          />
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hx-accent/10 flex items-center justify-center">
                <span className="text-hx-accent font-heading font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-hx-text mb-2">
                  Submit Your Idea
                </h3>
                <p className="text-hx-muted">
                  Share your vision, market opportunity, and what you're looking to build.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hx-accent/10 flex items-center justify-center">
                <span className="text-hx-accent font-heading font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-hx-text mb-2">
                  Discovery & Validation
                </h3>
                <p className="text-hx-muted">
                  We work together to validate the concept, map technical requirements, and
                  define success metrics.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hx-accent/10 flex items-center justify-center">
                <span className="text-hx-accent font-heading font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-hx-text mb-2">
                  Build & Launch
                </h3>
                <p className="text-hx-muted">
                  We co-invest, build the platform, and support your go-to-market launch.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hx-accent/10 flex items-center justify-center">
                <span className="text-hx-accent font-heading font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-hx-text mb-2">
                  Scale & Grow
                </h3>
                <p className="text-hx-muted">
                  We continue to support operations, hiring, and scaling as your business
                  grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Build Your AdTech Venture?"
        subtitle="Let's discuss your idea and explore how we can partner"
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </>
  );
}
