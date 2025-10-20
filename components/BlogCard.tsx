import Link from "next/link";
import { Badge } from "./ui/Badge";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  tags,
}: BlogCardProps) {
  return (
    <Link
      href={`/insights/${slug}`}
      className="group block p-6 md:p-8 bg-hx-surface border border-hx-border rounded-2xl hover:border-hx-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-hx-accent/10"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="default">
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="text-xl md:text-2xl font-heading font-semibold text-hx-text mb-3 group-hover:text-hx-accent transition-colors">
        {title}
      </h3>

      <p className="text-hx-muted mb-4 line-clamp-2">{excerpt}</p>

      <div className="flex items-center space-x-4 text-sm text-hx-muted">
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{format(new Date(date), "MMM dd, yyyy")}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
