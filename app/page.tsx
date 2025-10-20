import { Hero } from "@/components/Hero";
import { StatBar } from "@/components/StatBar";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CTABand } from "@/components/CTABand";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Zap,
  Target,
  Database,
  Server,
  Network,
  Layers,
  Brain,
  Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  { value: "$2B+", label: "Managed Media" },
  { value: "50B+", label: "Daily Impressions" },
  { value: "Petabyte", label: "Scale Data" },
  { value: "20+", label: "Markets" },
];

const capabilities = [
  {
    icon: Zap,
    title: "DSP Development",
    description:
      "Custom bidders, pacing algorithms, optimization engines, and integrations with major exchanges.",
  },
  {
    icon: Target,
    title: "SSP & Publisher Tech",
    description:
      "Yield optimization, inventory curation, and header bidding frameworks.",
  },
  {
    icon: Database,
    title: "DMP & Data Infrastructure",
    description:
      "Data enrichment, lookalike modeling, and privacy-compliant pipelines.",
  },
  {
    icon: Server,
    title: "Ad Server Solutions",
    description:
      "Scalable, low-latency serving with full-funnel attribution.",
  },
  {
    icon: Network,
    title: "MetaDSP Systems",
    description:
      "Unify multi-DSP operations under an AI-powered control plane.",
  },
  {
    icon: Layers,
    title: "White-Label Platforms",
    description:
      "Rapid launch under your brand with full customization.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="We Build the AdTech that Powers Modern Advertising"
        subtitle="From DSPs to MetaDSPs, powered by AI + human expertise — trusted by those who move markets."
        primaryCTA={{ text: "Let's Build Together", href: "/contact" }}
        secondaryCTA={{ text: "Schedule a Discovery Call", href: "https://calendly.com/helix" }}
      />

      <StatBar stats={stats} />

      {/* Core Intro */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-hx-muted leading-relaxed">
            Helix designs, engineers, and scales full-stack AdTech products — DSPs, SSPs,
            DMPs, ad servers, white-label platforms, and next-gen MetaDSPs. Whether you
            manage terabytes of data or billions of daily auctions, our platforms are built
            for performance, reliability, and speed.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-hx-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Built for Every Layer of AdTech"
            subtitle="Comprehensive solutions for the modern advertising ecosystem"
            centered
            className="mb-12 md:mb-16 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={index} {...capability} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator: AI + Human Intelligence */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="AI + Human Intelligence"
            subtitle="The perfect combination for modern AdTech"
            centered
            className="mb-12 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hx-accent/10 mb-4">
                <Brain className="w-8 h-8 text-hx-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Proprietary AI
              </h3>
              <p className="text-hx-muted">
                Trained on $2B+ of historical media buying data for predictive planning
                and optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hx-accent/10 mb-4">
                <Users className="w-8 h-8 text-hx-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Domain Experts
              </h3>
              <p className="text-hx-muted">
                Teams who build fast, adapt faster, and optimize for real-world outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hx-accent/10 mb-4">
                <TrendingUp className="w-8 h-8 text-hx-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Full-Funnel Attribution
              </h3>
              <p className="text-hx-muted">
                Predictive planning, automated management, and transparent reporting baked in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Scale */}
      <section className="bg-hx-surface border-y border-hx-border py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hx-text mb-6">
              Enterprise-Grade Reliability. Global Reach.
            </h2>
            <p className="text-lg md:text-xl text-hx-muted mb-8">
              Built to handle high-throughput, low-latency workloads with transparent
              reporting. Trusted by enterprises, agencies, and startups across 20+ markets.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Build the Future of AdTech?"
        subtitle="Let's discuss how we can power your advertising infrastructure"
        primaryCTA={{ text: "Explore How We Build", href: "/services" }}
        secondaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
