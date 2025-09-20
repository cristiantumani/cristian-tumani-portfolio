import { ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import boltLogo from "@/assets/bolt-logo.png";
import chatgptLogo from "@/assets/chatgpt-logo.png";
import supabaseLogo from "@/assets/supabase-logo.png";

const PersonalProjectsSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="personal-projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Personal Projects
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring innovation through AI-powered solutions
            </p>
          </div>
          
          {/* Project Highlight */}
          <div className="animate-fade-in">
            <div className="bg-card-gradient p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50">
              
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    Opsia.io
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    Personal Finance App • Built with AI Tools
                  </div>
                </div>
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
              
              {/* Project Description */}
              <p className="font-body text-lg text-foreground leading-relaxed mb-8">
                Opsia.io is a simple AI-powered app that helps families track expenses effortlessly. 
                I built it to make personal finance more accessible and intuitive.
              </p>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-foreground mb-3">Built with AI Tools</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
                    <img src={boltLogo} alt="Bolt.new" className="w-5 h-5" />
                    <span className="text-muted-foreground text-sm font-medium">Bolt.new</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
                    <img src={chatgptLogo} alt="ChatGPT" className="w-5 h-5 rounded-full" />
                    <span className="text-muted-foreground text-sm font-medium">ChatGPT</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
                    <img src={supabaseLogo} alt="Supabase" className="w-5 h-5" />
                    <span className="text-muted-foreground text-sm font-medium">Supabase</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <a 
                    href="https://Opsia.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    👉 Try Opsia.io
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:animate-float" />
                  I'd love to hear your thoughts and feedback!
                </button>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;