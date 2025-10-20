import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/CTABand";
import { Code2, Database, Brain, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Join the Builders Behind AdTech",
  description:
    "Solve billion-impression challenges. Work on AI, big data, and cloud engineering at enterprise scale.",
};

const roles = [
  {
    icon: Code2,
    title: "AdTech Product Architect",
    department: "Engineering",
    location: "Remote / Hybrid",
    description:
      "Design and architect next-generation DSP, SSP, and MetaDSP systems. Lead technical strategy for client projects.",
  },
  {
    icon: Database,
    title: "Data Infrastructure Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    description:
      "Build and scale petabyte-scale data pipelines, real-time streaming systems, and privacy-compliant infrastructure.",
  },
  {
    icon: Brain,
    title: "ML Engineer — Media Optimization",
    department: "AI/ML",
    location: "Remote / Hybrid",
    description:
      "Develop ML models for bid optimization, audience segmentation, and predictive analytics. Work with production-scale systems.",
  },
  {
    icon: TrendingUp,
    title: "Programmatic Account Strategist",
    department: "Client Success",
    location: "Remote / Hybrid",
    description:
      "Partner with clients to optimize campaigns, analyze performance, and drive strategic outcomes using our platforms.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Join the Builders Behind the Future of AdTech"
        subtitle="Solve billion-impression challenges. Work on AI, big data, and cloud engineering at enterprise scale."
        primaryCTA={{ text: "View Open Roles", href: "#roles" }}
      />

      {/* Why Join */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          title="Why Helix?"
          centered
          className="mb-12 flex flex-col items-center"
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
              Impactful Work
            </h3>
            <p className="text-hx-muted">
              Work on systems that process billions of daily impressions and manage millions
              in media spend.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
              Cutting-Edge Tech
            </h3>
            <p className="text-hx-muted">
              Build with the latest in AI, cloud infrastructure, and real-time data
              processing.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
              Growth & Learning
            </h3>
            <p className="text-hx-muted">
              Learn from domain experts and work across the full AdTech stack — from data to
              UI.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="bg-hx-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Open Positions"
            subtitle="Find your next challenge"
            centered
            className="mb-12 md:mb-16 flex flex-col items-center"
          />
          <div className="max-w-5xl mx-auto space-y-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-hx-surface border border-hx-border rounded-2xl hover:border-hx-accent/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <role.icon className="w-8 h-8 text-hx-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-semibold text-hx-text mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-hx-muted mb-3">
                        <span>{role.department}</span>
                        <span>•</span>
                        <span>{role.location}</span>
                      </div>
                      <p className="text-hx-muted">{role.description}</p>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="px-6 py-2 bg-hx-accent text-hx-bg rounded-lg font-medium hover:bg-hx-accent/90 transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Culture"
            centered
            className="mb-12 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Remote-First
              </h3>
              <p className="text-hx-muted">
                Work from anywhere. We're a distributed team with flexible schedules and a
                focus on outcomes, not hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Continuous Learning
              </h3>
              <p className="text-hx-muted">
                Generous learning budgets, conference attendance, and access to cutting-edge
                tools and resources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Ownership & Impact
              </h3>
              <p className="text-hx-muted">
                Own your projects from start to finish. See your work directly impact clients
                and their businesses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Competitive Compensation
              </h3>
              <p className="text-hx-muted">
                Market-leading salaries, equity, comprehensive benefits, and performance
                bonuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Don't See the Right Role?"
        subtitle="We're always looking for exceptional talent. Send us your resume."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ text: "Learn About Us", href: "/about" }}
      />
    </>
  );
}
