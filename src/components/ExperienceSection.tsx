import { Building2, Plane, ShoppingBag, Rocket } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Plane,
      company: "LATAM Airlines",
      role: "Senior Product Manager",
      period: "2022 - Present",
      location: "Santiago, Chile",
      description: "Leading digital transformation initiatives for Latin America's largest airline, focusing on customer experience optimization and operational efficiency.",
      achievements: [
        "Launched mobile-first booking platform serving 50M+ customers",
        "Increased conversion rates by 35% through UX optimization",
        "Led cross-border team of 15 engineers and designers"
      ]
    },
    {
      icon: ShoppingBag,
      company: "adidas",
      role: "Product Manager",
      period: "2020 - 2022",
      location: "Amsterdam, Netherlands",
      description: "Drove product strategy for e-commerce platforms across European markets, focusing on personalization and mobile commerce.",
      achievements: [
        "Implemented AI-driven recommendation system",
        "Managed product roadmap for 8 European markets",
        "Collaborated with global teams across 12 time zones"
      ]
    },
    {
      icon: Rocket,
      company: "Tech Startups",
      role: "Product Lead",
      period: "2018 - 2020",
      location: "Barcelona, Spain",
      description: "Built products from ground up in high-growth startup environment, wearing multiple hats from strategy to execution.",
      achievements: [
        "Took 2 products from concept to market launch",
        "Established product development processes",
        "Scaled team from 3 to 20 members"
      ]
    },
    {
      icon: Building2,
      company: "Consulting & Early Career",
      role: "Product Consultant",
      period: "2016 - 2018",
      location: "Santiago, Chile",
      description: "Provided product strategy consulting to various companies while building foundational skills in product management.",
      achievements: [
        "Consulted for 15+ companies across industries",
        "Developed expertise in user research and data analysis",
        "Built network across Latin American tech ecosystem"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through diverse industries and markets, building products that matter
            </p>
          </div>
          
          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  
                  {/* Icon & Timeline */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="hidden md:block w-px h-16 bg-border mx-auto mt-4"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <div className="font-body font-semibold text-primary mb-2">
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    
                    <p className="font-body text-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span className="font-body text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;