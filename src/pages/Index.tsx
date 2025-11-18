import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PersonalProjectsSection from "@/components/PersonalProjectsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Cristian Tumani",
    "jobTitle": "Product Lead",
    "description": "Experienced Product Lead with international experience. Building products from 0 to launch across Chile, Amsterdam, and Barcelona. AI Product Manager",
    "url": "https://www.cristiantumanipq.com",
    "sameAs": [
      "https://www.linkedin.com/in/cristiantumanipq"
    ],
    "knowsAbout": ["Product Management", "Product Strategy", "AI Products", "Roadmapping", "Leadership"],
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barcelona",
        "addressCountry": "ES"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PersonalProjectsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
