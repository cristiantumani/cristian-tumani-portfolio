import { ExternalLink, ArrowRight, Users, TrendingUp, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Global E-commerce Platform",
      company: "adidas",
      category: "E-commerce • Mobile",
      description: "Led the development of a unified e-commerce platform serving 8 European markets with AI-driven personalization and mobile-first design.",
      impact: [
        { icon: Users, label: "50M+ Users", value: "Across Europe" },
        { icon: TrendingUp, label: "35% Increase", value: "Conversion Rate" },
        { icon: Globe, label: "8 Markets", value: "Simultaneous Launch" }
      ],
      technologies: ["React Native", "Machine Learning", "A/B Testing", "Analytics"],
      challenge: "Create a unified shopping experience across diverse European markets with different languages, currencies, and consumer behaviors.",
      solution: "Developed a modular platform with market-specific customization while maintaining a consistent core experience. Implemented AI-driven product recommendations and dynamic pricing strategies.",
      results: "Successfully launched in 8 markets within 6 months, achieving 35% improvement in conversion rates and 50% reduction in bounce rate."
    },
    {
      title: "Airline Digital Transformation",
      company: "LATAM Airlines",
      category: "Travel • Mobile App",
      description: "Spearheaded the digital transformation of booking and customer service experiences for Latin America's largest airline group.",
      impact: [
        { icon: Users, label: "30M+ Travelers", value: "Annual Users" },
        { icon: TrendingUp, label: "40% Reduction", value: "Support Tickets" },
        { icon: Globe, label: "18 Countries", value: "Service Coverage" }
      ],
      technologies: ["Flutter", "Cloud Architecture", "API Integration", "Customer Analytics"],
      challenge: "Modernize legacy booking systems while maintaining service reliability for millions of travelers across 18 countries.",
      solution: "Implemented a phased migration strategy with extensive testing and gradual rollout. Created self-service capabilities and intelligent routing for customer support.",
      results: "Reduced customer support tickets by 40% while improving user satisfaction scores from 3.2 to 4.6 stars across app stores."
    },
    {
      title: "Fintech Startup MVP",
      company: "Independent",
      category: "Fintech • Startup",
      description: "Built and launched a financial technology product from concept to market, focusing on cross-border payments for Latin American markets.",
      impact: [
        { icon: Users, label: "10K+ Users", value: "First 6 Months" },
        { icon: TrendingUp, label: "€2M+", value: "Transaction Volume" },
        { icon: Globe, label: "5 Countries", value: "Market Coverage" }
      ],
      technologies: ["React", "Blockchain", "Payment APIs", "Compliance"],
      challenge: "Enter the competitive fintech market with limited resources while ensuring regulatory compliance across multiple jurisdictions.",
      solution: "Focused on underserved market segment with MVP approach. Built strategic partnerships with local banks and leveraged blockchain for transparency and cost reduction.",
      results: "Achieved product-market fit within 6 months, processing over €2M in transactions and securing Series A funding."
    }
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