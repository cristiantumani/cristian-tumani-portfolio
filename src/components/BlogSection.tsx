import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import CategoryPill from "@/components/blog/CategoryPill";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const BlogSection = () => {
  const navigate = useNavigate();
  
  // Show only the last 3 blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <MotionDiv className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Blog
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, insights, and experiences from my journey in technology and beyond
            </p>
          </MotionDiv>

          {recentPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Blog posts coming soon. Stay tuned for insights and updates!
              </p>
            </div>
          ) : (
            <>
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {recentPosts.map((post) => (
                  <StaggerItem key={post.id}>
                    <Card className="glass-card border-border/50 hover:border-border transition-all duration-300 group h-full flex flex-col">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category) => (
                            <CategoryPill key={category} category={category} />
                          ))}
                        </div>
                        <CardTitle className="line-clamp-2 text-foreground group-hover:text-foreground/80 transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-muted-foreground line-clamp-3 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <Button 
                          variant="ghost" 
                          className="group/btn self-start hover:bg-secondary"
                          onClick={() => navigate(`/blog/${post.slug}`)}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              {blogPosts.length > 3 && (
                <MotionDiv delay={0.4} className="text-center mt-12">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => navigate("/blog")}
                    className="group border-border hover:bg-secondary"
                  >
                    View All Posts
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MotionDiv>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
