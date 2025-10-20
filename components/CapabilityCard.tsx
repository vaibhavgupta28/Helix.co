import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function CapabilityCard({
  icon: Icon,
  title,
  description,
  className,
}: CapabilityCardProps) {
  return (
    <div
      className={cn(
        "group p-6 md:p-8 bg-hx-surface border border-hx-border rounded-2xl hover:border-hx-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-hx-accent/10",
        className
      )}
    >
      <div className="mb-4">
        <Icon
          className="w-10 h-10 text-hx-accent group-hover:scale-110 transition-transform duration-300"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-xl font-heading font-semibold text-hx-text mb-3">
        {title}
      </h3>
      <p className="text-hx-muted leading-relaxed">{description}</p>
    </div>
  );
}
