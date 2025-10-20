"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
}

function AnimatedStat({ value, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-hx-accent mb-2 transition-all duration-700 ${
          hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {value}
      </div>
      <div className="text-sm md:text-base text-hx-muted">{label}</div>
    </div>
  );
}

export function StatBar({ stats }: StatBarProps) {
  return (
    <section className="bg-hx-surface border-y border-hx-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
