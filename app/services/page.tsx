import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/CTABand";
import {
  Code2,
  Brain,
  Database,
  Layers,
  Users,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Full-Stack AdTech Development",
  description:
    "Bespoke AdTech solutions: DSPs, SSPs, DMPs, ad servers, white-label platforms, and AI-powered infrastructure.",
};

const services = [
  {
    icon: Code2,
    title: "AdTech Product Development",
    description:
      "Build full-stack advertising platforms from the ground up or enhance existing systems.",
    capabilities: [
      "DSP, SSP, DMP, and ad server platforms",
      "Custom RTB engines and bidding algorithms",
      "Bid optimization and pacing logic",
      "Real-time analytics and reporting dashboards",
      "Exchange integrations (Google Ad Manager, Xandr, etc.)",
    ],
  },
  {
    icon: Brain,
    title: "AI-Powered Media Infrastructure",
    description:
      "Leverage machine learning and AI to automate, optimize, and scale your media operations.",
    capabilities: [
      "Campaign automation and orchestration",
      "Predictive modeling and forecasting",
      "ML-driven bid strategies and budget allocation",
      "Audience segmentation and lookalike modeling",
      "Cross-channel attribution modeling",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering & Enrichment",
    description:
      "Build scalable data pipelines and infrastructure to power your advertising ecosystem.",
    capabilities: [
      "Data pipelines and ETL workflows",
      "Audience intelligence and enrichment",
      "Privacy-first identity resolution",
      "First-party data activation",
      "Real-time streaming and batch processing",
    ],
  },
  {
    icon: Layers,
    title: "White-Label & MetaDSP Solutions",
    description:
      "Launch your own branded AdTech platform or unify multiple DSPs under one control plane.",
    capabilities: [
      "Fast deployment under your brand",
      "Integrate with your data partners and publishers",
      "Multi-DSP orchestration and optimization",
      "Custom UI/UX and white-label branding",
      "Full stack management and operations",
    ],
  },
  {
    icon: Users,
    title: "Consulting & Tech Augmentation",
    description:
      "Extend your team with our experts or let us manage your AdTech operations entirely.",
    capabilities: [
      "Team integration (in-house, hybrid, or fully managed)",
      "Build–Operate–Transfer (BOT) model",
      "Technical due diligence for M&A",
      "Platform audits and optimization",
      "Strategic roadmap and architecture planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Full-Stack AdTech Solutions"
        subtitle="We deliver bespoke AdTech platforms and services — from concept to scale — connecting your data, inventory, and media execution."
      />

      {/* Intro */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-hx-muted leading-relaxed">
            Whether you need a custom DSP, a white-label platform, or an AI-powered MetaDSP
            system, we build solutions tailored to your unique requirements. Our services
            span the entire AdTech stack — from data infrastructure to real-time bidding to
            advanced analytics.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-hx-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Capabilities"
            subtitle="End-to-end AdTech engineering and consulting"
            centered
            className="mb-12 md:mb-16 flex flex-col items-center"
          />
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 md:p-10 bg-hx-surface border border-hx-border rounded-2xl hover:border-hx-accent/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-hx-accent/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-hx-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-hx-text mb-3">
                      {service.title}
                    </h3>
                    <p className="text-lg text-hx-muted mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-hx-accent flex-shrink-0 mt-0.5" />
                          <span className="text-hx-muted">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="How We Work"
            centered
            className="mb-12 flex flex-col items-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-hx-accent mb-3">01</div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Discovery & Planning
              </h3>
              <p className="text-hx-muted">
                We start by understanding your needs, goals, and constraints. Then we map
                out a technical roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-hx-accent mb-3">02</div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Build & Iterate
              </h3>
              <p className="text-hx-muted">
                We ship fast, gather feedback, and iterate. Continuous delivery ensures you
                see progress every week.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-hx-accent mb-3">03</div>
              <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
                Scale & Optimize
              </h3>
              <p className="text-hx-muted">
                Once live, we monitor, optimize, and scale your platform to handle growth
                and new requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="See Our Capabilities in Action"
        subtitle="Explore real-world case studies and results"
        primaryCTA={{ text: "View Case Studies", href: "/case-studies" }}
        secondaryCTA={{ text: "Discuss Your Project", href: "/contact" }}
      />
    </>
  );
}
