const profilePhoto = "/lovable-uploads/7fad32e2-e4d6-4e6a-b7f2-5ab8bffd265f.png";

const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-section-gradient pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-gradient opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-3/4 left-1/5 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-5 h-5 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 shadow-card">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Let's collaborate together</span>
            </div>

            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Cristian Tumani
            </h1>
            
            <div className="bg-hero-gradient bg-clip-text text-transparent font-heading font-semibold text-xl lg:text-2xl mb-6">
              Product Lead | International Experience | From 0 to Launch
            </div>
            
            <p className="font-body text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">Adaptable leader with 13+ years building digital products across three countries. Passionate about transforming ideas into impactful solutions that scale globally.</p>
            
            {/* Stats section */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-primary">13+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-primary">3</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-primary">AI</div>
                <div className="text-sm text-muted-foreground">Product Lead</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-primary">Multiple</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-hero-gradient text-primary-foreground font-body font-medium px-8 py-3 rounded-lg shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-105">
                Let's Connect
              </button>
              
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border border-border bg-card/80 backdrop-blur-sm text-foreground font-body font-medium px-8 py-3 rounded-lg hover:bg-secondary transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-float relative">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-8 rounded-full border border-primary/20 animate-pulse"></div>
              <div className="absolute -inset-16 rounded-full border border-accent/10 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hero relative z-10">
                <img src={profilePhoto} alt="Cristian Tumani - Senior Product Manager" className="w-full h-full object-cover object-[center_20%] scale-105" />
              </div>
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-10 z-20"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};

export default HeroSection;