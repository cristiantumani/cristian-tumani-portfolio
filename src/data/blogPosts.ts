import { CategoryType } from "./blogCategories";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  categories: CategoryType[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "4",
    title: "The Hidden Cost of Forgotten Decisions",
    excerpt: "Every product team has had this moment: You're debating a feature, and someone says 'Wait, didn't we already decide this?' Nobody can find it. So you spend another hour re-debating something you already resolved months ago.",
    date: "December 12, 2025",
    readTime: "5 min read",
    slug: "hidden-cost-of-forgotten-decisions",
    categories: ["Product Ops", "Leadership"]
  },
  {
    id: "1",
    title: "Balancing the Now and the Next: Building a Product Roadmap That Serves Both Revenue and Vision",
    excerpt: "In B2B SaaS, your product roadmap is more than a list of features — it's the strategic narrative of where your company is going and why. Learn how to balance short-term revenue targets with long-term product vision.",
    date: "October 21, 2025",
    readTime: "6 min read",
    slug: "balancing-now-and-next-product-roadmap",
    categories: ["Product Strategy", "Roadmapping", "Leadership"]
  },
  {
    id: "2",
    title: "The Power of Starting Over: Life Lessons from Two International Moves",
    excerpt: "Moving abroad comes in phases — from the honeymoon period to comparison and finally acceptance. Here are the lessons I learned from relocating my family twice, from Chile to Amsterdam and then to Barcelona.",
    date: "October 22, 2025",
    readTime: "5 min read",
    slug: "power-of-starting-over-international-moves",
    categories: ["Expat Life", "Personal Growth", "Travel"]
  },
  {
    id: "3",
    title: "The Prioritization Frameworks That Actually Work (After Years of Trial, Error & Chaos)",
    excerpt: "Everyone agrees prioritization is important… and absolutely no one agrees on how to do it. After years in Product, here are the frameworks that actually work without over-engineering or analysis paralysis.",
    date: "November 18, 2025",
    readTime: "7 min read",
    slug: "prioritization-frameworks-that-actually-work",
    categories: ["Product Strategy", "Roadmapping", "Leadership"]
  }
];
