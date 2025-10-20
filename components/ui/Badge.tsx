import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-hx-surface text-hx-muted border border-hx-border": variant === "default",
          "bg-hx-accent/10 text-hx-accent border border-hx-accent/20": variant === "accent",
          "border border-hx-border text-hx-text": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
