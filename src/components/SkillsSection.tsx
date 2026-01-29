import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const SkillsSection = () => {
  const skills = [
    {
      category: "Product Strategy",
      items: ["Roadmapping", "OKRs & KPIs", "Market Research", "Competitive Analysis"],
      size: "lg",
      emoji: "🎯"
    },
    {
      category: "AI & Automation",
      items: ["Claude AI", "OpenAI", "n8n Workflows", "LLM Integration"],
      size: "md",
      emoji: "🤖"
    },
    {
      category: "Development",
      items: ["React", "TypeScript", "Node.js", "Supabase"],
      size: "md",
      emoji: "💻"
    },
    {
      category: "Leadership",
      items: ["Team Building", "Cross-functional Collaboration", "Stakeholder Management"],
      size: "sm",
      emoji: "👥"
    },
    {
      category: "Data & Analytics",
      items: ["SQL", "Product Analytics", "A/B Testing", "Data Visualization"],
      size: "sm",
      emoji: "📊"
    },
    {
      category: "Tools & Platforms",
      items: ["Jira", "Figma", "Slack", "Notion", "Linear"],
      size: "sm",
      emoji: "🛠️"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "lg":
        return "md:col-span-2 md:row-span-2";
      case "md":
        return "md:col-span-1 md:row-span-2";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <MotionDiv className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A blend of product leadership, technical skills, and AI-powered innovation
            </p>
          </MotionDiv>
          
          {/* Bento Grid */}
          <StaggerContainer 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]" 
            staggerDelay={0.08}
          >
            {skills.map((skill, index) => (
              <StaggerItem key={index} className={getSizeClasses(skill.size)}>
                <div className="glass-card rounded-2xl p-6 h-full skill-card-hover group transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                      <span className="text-2xl">{skill.emoji}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground pt-2">
                      {skill.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-secondary/50 rounded-lg text-muted-foreground text-sm font-medium border border-border/30 group-hover:border-border/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
