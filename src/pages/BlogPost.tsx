import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPostDetail from "@/components/blog/BlogPostDetail";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate("/blog")}
            className="text-primary hover:underline"
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": "Cristian Tumani",
      "url": "https://www.cristiantumanipq.com"
    },
    "datePublished": new Date(post.date).toISOString(),
    "publisher": {
      "@type": "Person",
      "name": "Cristian Tumani"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.cristiantumanipq.com/blog/${post.slug}`
    },
    "keywords": post.categories.join(", ")
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title} - Cristian Tumani</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.cristiantumanipq.com/blog/${post.slug}`} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://www.cristiantumanipq.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navigation />
      <div className="pt-20">
        <BlogPostDetail onBack={() => navigate("/blog")} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
