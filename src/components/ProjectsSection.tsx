import { ExternalLink, ArrowRight, Users, TrendingUp, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Global E-commerce Platform",
      company: "adidas",
      category: "E-commerce • Mobile",
      description: "Led the development of a new Mobile App platform serving +20 countries accross the globe.",
      impact: [
        { icon: Users, label: "4M+ Monthly Active Users", value: "Worldwide" },
        { icon: TrendingUp, label: "500M Revenue", value: "Revenue" },
        { icon: Globe, label: "+20 Markets", value: "Simultaneous Launch" }
      ],
      technologies: ["iOS", "Android", "A/B Testing", "Analytics"],
      challenge: "Create a new Mobile App focused on niche of Sneaker fans to compete with Nike Sneakers App across thw world, currencies, and consumer behaviors.",
      solution: "Developed a Mobile App rooted in adidas culture fostering not only the best products but User Experience and relevant content while maintaining a consistent core experience.",
      results: "Successfully launched in +20 markets within the first 6 months, achieving an incredible mark of 6 millions installs and 4M monthly active users."
    },
    {
      title: "Airline Digital Transformation",
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Case studies showcasing product strategy, execution, and measurable impact
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8 lg:p-12">
                  
                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary/10 text-primary font-body font-medium text-sm px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-muted-foreground font-body text-sm">
                          {project.company}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="font-body text-lg text-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Impact Metrics */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                      {project.impact.map((metric, i) => (
                        <div key={i} className="text-center lg:text-right">
                          <div className="flex justify-center lg:justify-end mb-2">
                            <metric.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div className="font-heading font-bold text-xl text-foreground">
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
                        className="bg-secondary text-secondary-foreground font-body text-sm px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        Challenge
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        Solution
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        Results
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {project.results}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-hero-gradient text-primary-foreground font-body font-medium px-8 py-4 rounded-lg shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;