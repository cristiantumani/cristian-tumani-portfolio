export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Balancing the Now and the Next: Building a Product Roadmap That Serves Both Revenue and Vision",
    excerpt: "In B2B SaaS, your product roadmap is more than a list of features — it's the strategic narrative of where your company is going and why. Learn how to balance short-term revenue targets with long-term product vision.",
    date: "October 21, 2025",
    readTime: "6 min read",
    slug: "balancing-now-and-next-product-roadmap"
  }
];
