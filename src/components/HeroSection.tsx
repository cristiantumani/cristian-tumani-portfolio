import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-section-gradient pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Cristian Tumani
            </h1>
            
            <div className="bg-hero-gradient bg-clip-text text-transparent font-heading font-semibold text-xl lg:text-2xl mb-6">
              Senior Product Manager | International Experience | From 0 to Launch
            </div>
            
            <p className="font-body text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Adaptable leader with 8+ years building digital products across three countries. 
              Passionate about transforming ideas into impactful solutions that scale globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-hero-gradient text-primary-foreground font-body font-medium px-8 py-3 rounded-lg shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </button>
              
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-border bg-card text-foreground font-body font-medium px-8 py-3 rounded-lg hover:bg-secondary transition-all duration-300"
              >
                View Projects
              </button>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hero">
                <img 
                  src={profilePhoto} 
                  alt="Cristian Tumani - Senior Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-10"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;