import Link from "next/link";
import { Badge } from "./ui/Badge";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  challenge: string;
  results: string[];
  tags: string[];
}

export function CaseStudyCard({
  slug,
  title,
  client,
  challenge,
  results,
  tags,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group block p-6 md:p-8 bg-hx-surface border border-hx-border rounded-2xl hover:border-hx-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-hx-accent/10"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="text-2xl font-heading font-semibold text-hx-text mb-2 group-hover:text-hx-accent transition-colors">
        {title}
      </h3>

      <p className="text-sm text-hx-muted mb-4">{client}</p>

      <p className="text-hx-muted mb-6 line-clamp-2">{challenge}</p>

      <div className="space-y-2 mb-6">
        {results.slice(0, 2).map((result, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-hx-accent mt-1">✓</span>
            <span className="text-sm text-hx-muted">{result}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center text-hx-accent group-hover:text-hx-accent/80 transition-colors">
        <span className="text-sm font-medium">Read case study</span>
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
