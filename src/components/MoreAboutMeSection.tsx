import { Flag, PersonStanding, Plane, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MoreAboutMeSection = () => {
  const interests = [
    {
      icon: Flag,
      title: "Golf",
      description: "I've been playing golf since I was 8 years old, so I'll always be open for a good round of golf.",
    },
    {
      icon: PersonStanding,
      title: "Running",
      description:
        "Running has been my passion for the last few years — it's what I call my active meditation. I'm a proud marathoner, having finished three successful marathons. So if you're up for a good run or product chat while putting some kilometers down, count on me!",
    },
    {
      icon: Plane,
      title: "Travel",
      description:
        "I've lived in four different countries and visited 37, but I still haven't set foot in Africa — the only continent I'm missing!",
    },
    {
      icon: Heart,
      title: "Family",
      description:
        "Most importantly, I'm a proud husband and father of three beautiful kids — two boys and a girl — who remind me every day what really matters.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">More About Me</h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond product management, here's what makes me tick
            </p>
          </div>

          {/* Interest Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <Card
                  key={interest.title}
                  className="hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in bg-card/80 backdrop-blur-sm border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{interest.title}</h3>
                        <p className="font-body text-muted-foreground leading-relaxed">{interest.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div className="text-center animate-fade-in bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/30 max-w-4xl mx-auto">
            <p className="font-body text-lg text-foreground leading-relaxed">
              I'm not just a product person — if you're into sports, travel, or want to chat about expat life,
              parenting, or personal growth, I'd love to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMeSection;
