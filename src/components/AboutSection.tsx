import { MapPin, Users, Target, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const AboutSection = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Global Journey",
      description: "Chile → Amsterdam → Barcelona",
      span: "col-span-1"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Building and scaling product teams",
      span: "col-span-1"
    },
    {
      icon: Target,
      title: "Strategic Vision",
      description: "From concept to market success",
      span: "col-span-1"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Startup agility meets enterprise scale",
      span: "col-span-1"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <MotionDiv className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              About Me
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A product leader's journey across continents, cultures, and challenges
            </p>
          </MotionDiv>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Story - Large Card */}
            <MotionDiv delay={0.1} className="lg:col-span-2 lg:row-span-2">
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="space-y-6">
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    My career began in <span className="text-foreground font-medium">Santiago, Chile</span>, where I discovered my passion for building products that solve real problems while working at LATAM Airlines. The journey then took me to <span className="text-foreground font-medium">Amsterdam</span>, where I joined adidas and learned to navigate international markets and diverse team dynamics.
                  </p>
                  
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    Currently based in <span className="text-foreground font-medium">Barcelona, Spain</span>, with 13+ years of digital product management experience, from both high-growth startups and established enterprises.
                  </p>
                  
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    My unique perspective comes from leading products in different cultural contexts and market conditions.
                  </p>

                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    I thrive on the challenge of taking products from <span className="font-medium text-foreground">zero to launch</span>, building cross-functional teams, and creating solutions that scale globally while remaining locally relevant.
                  </p>

                  <Link to="/more-about-me">
                    <Button 
                      variant="outline" 
                      className="group mt-4 border-border hover:bg-secondary"
                    >
                      More About Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </MotionDiv>
            
            {/* Highlight Cards - Bento Grid */}
            <StaggerContainer className="contents" staggerDelay={0.1}>
              {highlights.map((highlight, index) => (
                <StaggerItem key={index}>
                  <div className="glass-card rounded-2xl p-6 h-full border-glow group transition-all duration-300 hover:border-border/80">
                    <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/80 transition-colors">
                      <highlight.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
