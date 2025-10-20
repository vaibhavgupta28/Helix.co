import Link from "next/link";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hx-accent focus-visible:ring-offset-2 focus-visible:ring-offset-hx-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        accent:
          "bg-hx-accent text-hx-bg hover:bg-hx-accent/90 shadow-lg shadow-hx-accent/20",
        secondary:
          "bg-hx-surface text-hx-text border border-hx-border hover:bg-hx-border/50",
        outline:
          "border-2 border-hx-accent text-hx-accent hover:bg-hx-accent hover:text-hx-bg",
        ghost: "text-hx-text hover:bg-hx-surface",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-3",
        lg: "text-lg px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant,
  size,
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}
