import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import CategoryPill from "@/components/blog/CategoryPill";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" onClick={() => navigate("/")} className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight pb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Blog Post
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thoughts, insights, and experiences from my journey in technology and beyond
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                 <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <CategoryPill key={category} category={category} />
                      ))}
                    </div>
                    <CardTitle className="line-clamp-2 leading-snug pb-1">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
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
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="group" onClick={() => navigate(`/blog/${post.slug}`)}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
