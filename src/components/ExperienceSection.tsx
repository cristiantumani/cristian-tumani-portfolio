import { Building2, Plane, ShoppingBag, Rocket } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Rocket,
      company: "Lokalise",
      role: "Group Product Manager",
      period: "May 2022 - Present",
      location: "Barcelona, Spain - Amsterdam, Netherlands",
      description: "Leading a high-performing team of 3 Product Managers to revolutionize the localization industry - led development of new products from zero to launch using cutting-edge AI solutions, achieving cost reductions while scaling our platform to serve global enterprises.",
      achievements: [
        "Built AI-powered Marketing Content solution from scratch with integrations such as Shopify, Contentful, Webflow, and HubSpot",
  ,
        "Actively participate and conducted 100+ customer interviews driving strategic product decisions"
      ]
    },
    {
      icon: ShoppingBag,
      company: "adidas",
      role: "Director of Product Management",
      period: "Dec 2021 - May 2022",
      location: "Amsterdam, Netherlands",
      description: "Orchestrated the transformation of adidas CONFIRMED into the world's premier sneakerhead community platform, delivering exceptional growth metrics and establishing new standards for brand engagement in the digital space.",
      achievements: [
        "Scaled app to 6M+ installs and 4M MAUs across US, EU, and China",
        "Supported €500M+ revenue targets within the first year",
        "Led and coached a high-performing team of 4 Product Owners"
      ]
    },
    {
      icon: ShoppingBag,
      company: "adidas",
      role: "Senior Product Manager - Mobile App",
      period: "Aug 2019 - Dec 2021",
      location: "Amsterdam, Netherlands",
      description: "Pioneered the creation and launch of the revolutionary adidas CONFIRMED app from zero to global phenomenon, establishing the blueprint for community-driven commerce across 20+ international markets.",
      achievements: [
        "Built product from zero to live launch in 20+ countries",
        "Managed complete product development lifecycle and team formation",
        "Orchestrated successful app launches across US and EU markets"
      ]
    },
    {
      icon: Plane,
      company: "LATAM Airlines Group",
      role: "Senior Product Owner - Mobile App",
      period: "Mar 2018 - Jun 2019",
      location: "Santiago, Chile",
      description: "Masterfully executed the strategic consolidation of two major airline mobile platforms into a seamless, unified LATAM experience, delivering enhanced user journeys for millions of travelers across Latin America's most demanding aviation market.",
      achievements: [
        "Successfully migrated 5 million users from TAM to unified LATAM mobile app",
        "Redesigned check-in process reducing completion time from 1.2 minutes to under 10 seconds",
        "Increased mobile check-in participation by 10% company-wide"
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