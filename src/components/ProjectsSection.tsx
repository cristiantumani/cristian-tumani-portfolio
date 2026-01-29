import { ArrowRight, Users, TrendingUp, Globe } from "lucide-react";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "adidas CONFIRMED App",
      company: "adidas",
      category: "E-commerce • Mobile",
      description: "Led the development of a new Mobile App platform serving +20 countries across the globe.",
      impact: [
        { icon: Users, label: "4M+ Monthly Active Users", value: "Worldwide" },
        { icon: TrendingUp, label: "500M Revenue", value: "Revenue" },
        { icon: Globe, label: "+20 Markets", value: "Simultaneous Launch" }
      ],
      technologies: ["iOS", "Android", "A/B Testing", "Analytics"],
      challenge: "Create a new Mobile App focused on niche of Sneaker fans to compete with Nike Sneakers App across the world, currencies, and consumer behaviors.",
      solution: "Developed a Mobile App rooted in adidas culture fostering not only the best products but User Experience and relevant content while maintaining a consistent core experience.",
      results: "Successfully launched in +20 markets within the first 6 months, achieving an incredible mark of 6 millions installs and 4M monthly active users."
    },
    {
      title: "Best Mobile Checkin in Airlines Industry",
      company: "LATAM Airlines",
      category: "Travel • Mobile App",
      description: "Improve Checkin experience in LATAM Airlines mobile app so to increase adoption of Checkin.",
      impact: [
        { icon: Users, label: "30M+ Travelers", value: "Annual Users" },
        { icon: TrendingUp, label: "80% Reduction", value: "Time" },
        { icon: Globe, label: "All LATAM Airlines Markets", value: "Service Coverage" }
      ],
      technologies: ["iOS", "Android", "API Integration", "Customer Analytics"],
      challenge: "Replace legacy checkin systems while maintaining service reliability for millions of travelers all LATAM Airlines Markets.",
      solution: "Implemented a Native checkin system optimised for mobile experience and reliability.",
      results: "Reduced time from start to finish checkin in more than 90% taking it from minutes to just a few seconds."
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <MotionDiv className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Case studies showcasing product strategy, execution, and measurable impact
            </p>
          </MotionDiv>
          
          {/* Projects */}
          <StaggerContainer className="space-y-8" staggerDelay={0.2}>
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <div className="glass-card rounded-2xl overflow-hidden border-glow transition-all duration-500">
                  <div className="p-8 lg:p-10">
                    
                    {/* Project Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-secondary text-foreground/80 font-body font-medium text-sm px-3 py-1.5 rounded-full border border-border/50">
                            {project.category}
                          </span>
                          <span className="text-muted-foreground font-body text-sm">
                            {project.company}
                          </span>
                        </div>
                        
                        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
                          {project.title}
                        </h3>
                        
                        <p className="font-body text-lg text-foreground/80 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Impact Metrics */}
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {project.impact.map((metric, i) => (
                          <div key={i} className="text-center lg:text-right">
                            <div className="flex justify-center lg:justify-end mb-2">
                              <metric.icon className="w-5 h-5 text-foreground/60" />
                            </div>
                            <div className="font-heading font-bold text-lg text-foreground">
                              {metric.label}
                            </div>
                            <div className="font-body text-sm text-muted-foreground">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-secondary text-foreground/70 font-body text-sm px-3 py-1.5 rounded-lg border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Details */}
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        { title: "Challenge", content: project.challenge },
                        { title: "Solution", content: project.solution },
                        { title: "Results", content: project.results }
                      ].map((section, i) => (
                        <div key={i}>
                          <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/50"></div>
                            {section.title}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {/* CTA */}
          <MotionDiv delay={0.4} className="text-center mt-16">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 bg-foreground text-background font-body font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:bg-foreground/90"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
