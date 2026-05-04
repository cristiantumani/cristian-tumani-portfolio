import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const profilePhoto = "/lovable-uploads/7fad32e2-e4d6-4e6a-b7f2-5ab8bffd265f.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Premium radial glow - fixed position top-right */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 85% 15%, hsla(250, 30%, 45%, 0.12), transparent 70%)'
        }}
      />
      
      {/* Secondary subtle glow - bottom left */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 600px 400px at 15% 85%, hsla(220, 30%, 40%, 0.08), transparent 70%)'
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsla(0,0%,100%,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsla(0,0%,100%,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status badge */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.1]"
            >
              Cristian Tumani
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-heading font-medium text-xl md:text-2xl text-muted-foreground mb-6"
            >
              CEO at Ninja Excel · AI Product Executive · From 0 to Launch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Experienced AI Product Manager with 13+ years building digital products across three countries. 
              Actively building AI-powered products and passionate about transforming ideas into impactful solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start mb-10"
            >
              {[
                { value: "13+", label: "Years Experience" },
                { value: "3", label: "Countries" },
                { value: "AI", label: "Product Lead" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-heading font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative inline-flex items-center justify-center gap-2 bg-foreground text-background font-body font-medium px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden shadow-[0_0_30px_hsla(0,0%,100%,0.15)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Let's Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() =>
                  document.getElementById("personal-projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/50 backdrop-blur-sm text-foreground font-body font-medium px-8 py-4 rounded-xl hover:bg-secondary hover:border-border/80 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                AI Projects
              </motion.button>

              <motion.button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/50 backdrop-blur-sm text-foreground font-body font-medium px-8 py-4 rounded-xl hover:bg-secondary hover:border-border/80 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>

              <motion.a
                href="https://cristiantumani.substack.com/?r=1q8ayo&utm_campaign=pub-share-checklist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/50 backdrop-blur-sm text-foreground font-body font-medium px-8 py-4 rounded-xl hover:bg-secondary hover:border-border/80 transition-all duration-300 text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Newsletter
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent blur-3xl scale-150" />
            
            {/* Photo container */}
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-border/50 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Cristian Tumani - Senior Product Manager"
                  className="w-full h-full object-cover object-[center_20%] scale-105"
                />
              </div>
              {/* Subtle ring */}
              <div className="absolute -inset-4 rounded-full border border-border/30 animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
