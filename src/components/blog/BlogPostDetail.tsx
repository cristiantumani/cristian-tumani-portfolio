import { useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryPill from "./CategoryPill";
import { blogPosts } from "@/data/blogPosts";
import { blogContent } from "@/data/blogContent";

interface BlogPostDetailProps {
  onBack: () => void;
}

const BlogPostDetail = ({ onBack }: BlogPostDetailProps) => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return null;
  }

  const content = blogContent[post.slug] || "<p>Content coming soon...</p>";

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Button>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <CategoryPill key={category} category={category} />
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight pb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
      </header>

      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

export default BlogPostDetail;
