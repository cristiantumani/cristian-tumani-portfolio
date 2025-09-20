import { useState } from "react";
import { Mail, Linkedin, Send, Target, Route, Cog, Globe, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    console.log('Form submission started with data:', formData);
    setIsSubmitting(true);
    
    try {
      console.log('Calling Supabase function...');
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });
      
      console.log('Function response:', { data, error });
      
      if (error) {
        console.error('Error sending contact email:', error);
        toast({
          title: "Error sending message",
          description: `There was an issue sending your message: ${error.message}. Please try again or contact me directly.`,
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error: any) {
      console.error('Network error sending contact email:', error);
      toast({
        title: "Error sending message", 
        description: `There was a network error: ${error?.message || 'Unknown error'}. Please try again or contact me directly.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    {
      icon: Target,
      title: "Product Strategy",
      description: "Shaping vision, defining goals, and ensuring the product delivers real business value."
    },
    {
      icon: Route,
      title: "Product Roadmap",
      description: "Turning strategy into a clear, actionable roadmap that balances priorities and resources."
    },
    {
      icon: Cog,
      title: "Product Operations",
      description: "Improving processes, tools, and collaboration to help teams ship faster and with less friction."
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "Bringing cross-cultural insights and global perspective to products and teams."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Let's Build Something Together
            </h2>
            <div className="w-24 h-1 bg-hero-gradient mx-auto mb-6"></div>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's how I can support your company:
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="font-body text-muted-foreground text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="bg-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Ready to get started?
              </h3>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how I can help you build better products and lead high-performing teams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:cristiantumani@gmail.com?subject=Let's%20Build%20Something%20Together"
                  className="inline-flex items-center justify-center gap-2 bg-hero-gradient text-primary-foreground font-body font-medium px-8 py-4 rounded-lg shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]"
                >
                  <Mail className="w-5 h-5" />
                  Schedule a Call
                </a>
                
                <a
                  href="https://www.linkedin.com/in/cristian-tumani-37690023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground font-body font-medium px-8 py-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-[1.02]"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Based in Barcelona, Spain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>cristiantumani@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;