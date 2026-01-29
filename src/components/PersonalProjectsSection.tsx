import { ExternalLink, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/motion";

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

  const projects = [
    {
      name: "Corteza",
      tagline: "Built by a Product Manager, for Product Managers",
      category: "Decision Intelligence Platform",
      badge: "Powered by Claude AI",
      status: "Private Beta",
      emoji: "🧠",
      accentColor: "from-violet-500/20 to-purple-500/20",
      description: "A Slack-native decision logging platform that helps product teams capture, organize, and search critical decisions without leaving their workflow.",
      features: [
        "AI-powered decision extraction from transcripts",
        "Semantic search with OpenAI embeddings",
        "Slack-first experience with interactive commands",
        "Jira integration for linking to epics"
      ],
      techStack: ["Node.js", "MongoDB", "Slack Bolt", "Claude Code", "OpenAI", "n8n", "Railway"],
      links: {
        live: "https://corteza.app/",
        github: "https://github.com/cristiantumani/corteza.app"
      }
    },
    {
      name: "Opsia.io",
      tagline: null,
      category: "Personal Finance App • Built with AI Tools",
      badge: null,
      status: null,
      emoji: "💰",
      accentColor: "from-emerald-500/20 to-teal-500/20",
      description: "Opsia.io is a simple AI-powered app that helps families track expenses effortlessly. I built it to make personal finance more accessible and intuitive.",
      features: [
        "Advanced reporting - track budget and spending trends",
        "Bulk add via CSV or XLSX",
        "Add expenses directly from WhatsApp messages",
        "Weekly digest with financial summary"
      ],
      techStack: ["Bolt.new", "ChatGPT", "Supabase", "Vercel", "Claude Code", "n8n", "Cloudflare"],
      links: {
        live: "https://Opsia.io",
        github: "https://github.com/cristiantumani/finance.bold.new"
      }
    }
  ];

  return (
    <section id="personal-projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <MotionDiv className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Personal Projects
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring innovation through AI-powered solutions
            </p>
          </MotionDiv>
          
          {/* Bento Grid Projects */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {projects.map((project) => (
              <StaggerItem key={project.name}>
                <div className="glass-card rounded-2xl p-8 h-full flex flex-col border-glow group transition-all duration-500">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                        {project.name}
                      </h3>
                      {project.tagline && (
                        <p className="text-sm text-muted-foreground italic mb-3">
                          {project.tagline}
                        </p>
                      )}
                      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium">
                        {project.category}
                      </div>
                    </div>
                    <div className={`bg-gradient-to-br ${project.accentColor} w-14 h-14 rounded-xl flex items-center justify-center border border-border/50`}>
                      <span className="text-2xl">{project.emoji}</span>
                    </div>
                  </div>

                  {/* Badges */}
                  {(project.badge || project.status) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badge && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-400 text-xs font-medium border border-violet-500/20">
                          {project.badge}
                        </span>
                      )}
                      {project.status && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-medium">
                          {project.status}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Description */}
                  <p className="font-body text-foreground/80 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 bg-secondary rounded-lg text-muted-foreground text-xs font-medium border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4">
                    <Button 
                      asChild
                      className="bg-foreground text-background hover:bg-foreground/90"
                    >
                      <a 
                        href={project.links.live} 
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
                      className="border-border hover:bg-secondary"
                    >
                      <a 
                        href={project.links.github} 
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Call to Action */}
          <MotionDiv delay={0.4} className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                Have a great idea but not sure how to build it?
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                I love helping turn ideas into reality. Let's chat about your project!
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Let's Talk
              </Button>
            </div>
          </MotionDiv>
          
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
