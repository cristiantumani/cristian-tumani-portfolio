import { ExternalLink, MessageCircle, Github } from "lucide-react";
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
        <div className="max-w-5xl mx-auto">
          
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
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            
            {/* Corteza Project Card */}
            <div className="bg-card-gradient p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 flex flex-col">
              
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    Corteza
                  </h3>
                  <p className="text-sm text-muted-foreground italic mb-2">
                    Built by a Product Manager, for Product Managers
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-sm font-medium">
                    Decision Intelligence Platform
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🧠</span>
                </div>
              </div>

              {/* Badge */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-medium">
                  Powered by Claude AI
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                  Private Beta
                </span>
              </div>
              
              {/* Project Description */}
              <p className="font-body text-foreground leading-relaxed mb-4 flex-grow">
                A Slack-native decision logging platform that helps product teams capture, organize, and search critical decisions without leaving their workflow.
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-foreground mb-2 text-sm">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI-powered decision extraction from transcripts</li>
                  <li>• Semantic search with OpenAI embeddings</li>
                  <li>• Slack-first experience with interactive commands</li>
                  <li>• Jira integration for linking to epics</li>
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Tech Stack</h4>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-muted rounded-lg">
                    <span className="text-muted-foreground text-xs font-medium">Node.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-muted rounded-lg">
                    <span className="text-muted-foreground text-xs font-medium">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-muted rounded-lg">
                    <span className="text-muted-foreground text-xs font-medium">Slack Bolt</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-muted rounded-lg">
                    <span className="text-muted-foreground text-xs font-medium">Claude API</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 bg-muted rounded-lg">
                    <span className="text-muted-foreground text-xs font-medium">OpenAI</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-start mt-auto">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4fe8] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <a 
                    href="https://corteza.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="px-5 py-2.5 rounded-lg font-medium"
                >
                  <a 
                    href="https://github.com/cristiantumani/corteza.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
              
            </div>

            {/* Opsia Project Card */}
            <div className="bg-card-gradient p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 flex flex-col">
              
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
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
              <p className="font-body text-foreground leading-relaxed mb-6 flex-grow">
                Opsia.io is a simple AI-powered app that helps families track expenses effortlessly. 
                I built it to make personal finance more accessible and intuitive.
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Built with AI Tools</h4>
                <div className="flex flex-wrap items-center gap-3">
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
              <div className="flex flex-col sm:flex-row gap-4 items-start mt-auto">
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
                  Share feedback
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