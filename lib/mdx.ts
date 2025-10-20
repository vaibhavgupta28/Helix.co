import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDirectory = path.join(process.cwd(), "content");

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  results: string[];
  tags: string[];
  date: string;
  content: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  content: string;
};

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const caseStudiesDir = path.join(contentDirectory, "case-studies");

  if (!fs.existsSync(caseStudiesDir)) {
    return [];
  }

  const files = fs.readdirSync(caseStudiesDir);
  const caseStudies = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(caseStudiesDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        ...(data as Omit<CaseStudy, "slug" | "content">),
        content,
      };
    });

  return caseStudies.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const filePath = path.join(contentDirectory, "case-studies", `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      ...(data as Omit<CaseStudy, "slug" | "content">),
      content,
    };
  } catch {
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const insightsDir = path.join(contentDirectory, "insights");

  if (!fs.existsSync(insightsDir)) {
    return [];
  }

  const files = fs.readdirSync(insightsDir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(insightsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        ...(data as Omit<BlogPost, "slug" | "content">),
        content,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(contentDirectory, "insights", `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      ...(data as Omit<BlogPost, "slug" | "content">),
      content,
    };
  } catch {
    return null;
  }
}
