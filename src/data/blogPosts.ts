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
  }
];
