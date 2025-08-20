import { MapPin, Users, Target, Zap } from "lucide-react";
const AboutSection = () => {
  const highlights = [{
    icon: MapPin,
    title: "Global Journey",
    description: "Chile → Amsterdam → Barcelona"
  }, {
    icon: Users,
    title: "Team Leadership",
    description: "Building and scaling product teams"
  }, {
    icon: Target,
    title: "Strategic Vision",
    description: "From concept to market success"
  }, {
    icon: Zap,
    title: "Innovation Focus",
    description: "Startup agility meets enterprise scale"
  }];
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A product leader's journey across continents, cultures, and challenges
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Story */}
            <div className="animate-slide-in-left">
              <p className="font-body text-lg text-foreground leading-relaxed mb-6">
                My career began in <span className="text-accent font-medium">Santiago, Chile</span>, where I discovered my passion for building products that solve real problems. The journey then took me to <span className="text-accent font-medium">Amsterdam</span>, where I learned to navigate international markets and diverse team dynamics.
              </p>
              
              <p className="font-body text-lg text-foreground leading-relaxed mb-6">
                Currently based in <span className="text-accent font-medium">13+ years of digital product management experience</span>, I bring together <span className="font-medium">8+ years of digital product management experience</span> from both high-growth startups and established enterprises. My unique perspective comes from leading products in different cultural contexts and market conditions.
              </p>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                I thrive on the challenge of taking products from <span className="font-medium">zero to launch</span>, building cross-functional teams, and creating solutions that scale globally while remaining locally relevant.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => <div key={index} className="bg-card-gradient p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>)}
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;