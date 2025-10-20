import { Button } from "./ui/Button";

interface CTABandProps {
  title: string;
  subtitle?: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export function CTABand({ title, subtitle, primaryCTA, secondaryCTA }: CTABandProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hx-accent/20 via-hx-accent-2/20 to-hx-accent/20" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-hx-text mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-hx-muted mb-8">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href={primaryCTA.href} size="lg" variant="accent">
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button href={secondaryCTA.href} size="lg" variant="outline">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
