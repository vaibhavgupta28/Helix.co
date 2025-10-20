"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  animated?: boolean;
}

export function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  animated = true,
}: HeroProps) {
  const MotionDiv = animated ? motion.div : "div";
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <section className="relative overflow-hidden data-flow-bg">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-hx-accent/10 via-transparent to-hx-accent-2/10" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <MotionDiv {...animationProps} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-hx-text mb-6 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-hx-muted mb-10 text-balance max-w-3xl mx-auto">
            {subtitle}
          </p>

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <Button href={primaryCTA.href} size="lg" variant="accent">
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} size="lg" variant="outline">
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </MotionDiv>
      </div>
    </section>
  );
}
