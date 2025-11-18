import { useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryPill from "./CategoryPill";
import ContactModal from "@/components/ContactModal";
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

      <div className="mt-12 pt-8 border-t border-border">
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Want to discuss this further?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'd love to hear your thoughts on this topic. Feel free to reach out if you have questions, want to share your experience, or just want to connect.
          </p>
          <ContactModal 
            defaultSubject={`Re: ${post.title}`}
            trigger={
              <Button size="lg" className="group">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            }
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
