import { useState } from "react";
import { Mail, Linkedin, Send, Target, Route, Cog, Bot, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/ui/motion";

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
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error: unknown) {
      console.error('Network error sending contact email:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast({
        title: "Error sending message", 
        description: `There was a network error: ${errorMessage}. Please try again or contact me directly.`,
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
      icon: Bot,
      title: "AI Products",
      description: "Building with cutting-edge AI tools like Claude Code, Cursor, n8n, Gamma, OpenAI, and more."
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <MotionDiv className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Let's Build Something Together
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's how I can support your company:
            </p>
          </MotionDiv>
          
          {/* Services Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16" staggerDelay={0.1}>
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <div className="glass-card rounded-2xl p-6 h-full border-glow group transition-all duration-300 text-center">
                    <div className="bg-secondary w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/80 transition-colors">
                      <IconComponent className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Contact Form and Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Contact Info */}
            <MotionDiv delay={0.2}>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Get in Touch
              </h3>
              
              <p className="font-body text-foreground/80 leading-relaxed mb-8">
                Whether you're looking for product strategy consultation, team leadership, 
                or just want to discuss the latest in product management, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground">Based in</div>
                    <div className="font-body text-muted-foreground">Barcelona, Spain</div>
                  </div>
                </div>
                
                <a 
                  href="mailto:cristiantumani@gmail.com"
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group transition-all duration-300 hover:border-border/80"
                >
                  <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground">Email</div>
                    <div className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
                      cristiantumani@gmail.com
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/cristian-tumani-37690023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group transition-all duration-300 hover:border-border/80"
                >
                  <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground">LinkedIn</div>
                    <div className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
                      Connect with me
                    </div>
                  </div>
                </a>
              </div>
            </MotionDiv>
            
            {/* Contact Form */}
            <MotionDiv delay={0.3}>
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-foreground mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-foreground mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-body font-medium text-foreground mb-2 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background font-body font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:bg-foreground/90 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </MotionDiv>
            
          </div>

          {/* Quick Contact CTA */}
          <MotionDiv delay={0.4} className="text-center">
            <div className="glass-card p-8 rounded-2xl max-w-xl mx-auto">
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Prefer a quick call?
              </h3>
              <p className="font-body text-muted-foreground mb-6 text-sm">
                Sometimes a conversation is faster than emails.
              </p>
              
              <a
                href="mailto:cristiantumani@gmail.com?subject=Let's%20Schedule%20a%20Call"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-body font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:bg-foreground/90 group"
              >
                <Mail className="w-4 h-4" />
                Schedule a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </MotionDiv>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
