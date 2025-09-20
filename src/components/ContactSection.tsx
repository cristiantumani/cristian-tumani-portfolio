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

          {/* Contact Form and Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Get in Touch
              </h3>
              
              <p className="font-body text-foreground leading-relaxed mb-8">
                Whether you're looking for product strategy consultation, team leadership, 
                or just want to discuss the latest in product management, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground">Based in</div>
                    <div className="font-body text-muted-foreground">Barcelona, Spain</div>
                  </div>
                </div>
                
                <a 
                  href="mailto:cristiantumani@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:shadow-card transition-all duration-300 group"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground">Email</div>
                    <div className="font-body text-muted-foreground group-hover:text-primary transition-colors">
                      cristiantumani@gmail.com
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/cristian-tumani-37690023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:shadow-card transition-all duration-300 group"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground">LinkedIn</div>
                    <div className="font-body text-muted-foreground group-hover:text-primary transition-colors">
                      Connect with me
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hero-gradient text-primary-foreground font-body font-medium px-6 py-4 rounded-lg shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
            
          </div>

          {/* Quick Contact CTA */}
          <div className="text-center animate-fade-in">
            <div className="bg-card p-6 rounded-2xl shadow-card max-w-xl mx-auto">
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Prefer a quick call?
              </h3>
              <p className="font-body text-muted-foreground mb-6 text-sm">
                Sometimes a conversation is faster than emails.
              </p>
              
              <a
                href="mailto:cristiantumani@gmail.com?subject=Let's%20Schedule%20a%20Call"
                className="inline-flex items-center justify-center gap-2 bg-hero-gradient text-primary-foreground font-body font-medium px-6 py-3 rounded-lg shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                Schedule a Call
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;